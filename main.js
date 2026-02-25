$(function () {
  const inlineCodeSelector = "main code:not(pre code)";
  const codeBlockSelector = "main pre:has(code)";
  const inlineAnimationMs = 400;
  const blockAnimationMs = 400;
  const collapsedPreviewLines = 2;

  function getCollapsedHeight($pre) {
    const lineHeight = parseFloat($pre.css("line-height")) || 24;
    return Math.round(lineHeight * collapsedPreviewLines);
  }

  function collapseCodeBlock($pre) {
    const currentHeight = $pre.outerHeight();
    const collapsedHeight = getCollapsedHeight($pre);

    $pre
      .stop(true, true)
      .css({
        maxHeight: `${currentHeight}px`,
        overflow: "hidden",
        opacity: 1,
      })
      .animate(
        {
          maxHeight: collapsedHeight,
        },
        blockAnimationMs,
        "swing",
        function () {
          $pre.addClass("collapsed");
          $pre.css({
            maxHeight: `${collapsedHeight}px`,
            overflow: "",
          });
        }
      );
  }

  function setCodeBlockCollapsed($pre) {
    const collapsedHeight = getCollapsedHeight($pre);

    $pre.addClass("collapsed").css({
      maxHeight: `${collapsedHeight}px`,
      overflow: "hidden",
    });
  }

  function expandCodeBlock($pre) {
    const currentHeight = $pre.outerHeight();
    const targetHeight = $pre.get(0).scrollHeight;

    $pre.removeClass("collapsed");

    $pre
      .stop(true, true)
      .css({
        maxHeight: `${currentHeight}px`,
        overflow: "hidden",
      })
      .animate(
        {
          maxHeight: targetHeight,
        },
        blockAnimationMs,
        "swing",
        function () {
          $pre.css({
            maxHeight: "none",
            overflow: "",
          });
        }
      );
  }

  $(inlineCodeSelector).each(function (index) {
    const $code = $(this);

    if ($code.parent().hasClass("inline-code-rollup")) {
      return;
    }

    const codeId = `inline-code-${index}`;
    const $wrapper = $('<span class="inline-code-rollup"></span>');
    const $button = $(
      `<button type="button" class="inline-code-toggle" aria-expanded="true" aria-controls="${codeId}" title="Collapse code">−</button>`
    );

    $code.attr("id", codeId).show();

    $code.wrap($wrapper);
    $code.before($button);
  });

  $(document).on("click", ".inline-code-toggle", function () {
    const $button = $(this);
    const codeId = $button.attr("aria-controls");
    const $code = $(`#${codeId}`);
    const isExpanded = $button.attr("aria-expanded") === "true";

    if (isExpanded) {
      $button.attr("aria-expanded", "false").attr("title", "Expand code").text("+");
      $code.stop(true, true).fadeOut(inlineAnimationMs);
      return;
    }

    $button.attr("aria-expanded", "true").attr("title", "Collapse code").text("−");
    $code.stop(true, true).fadeIn(inlineAnimationMs);
  });

  $(codeBlockSelector).each(function (index) {
    const $pre = $(this);

    if ($pre.parent().hasClass("code-block-rollup")) {
      return;
    }

    const blockId = `code-block-${index}`;
    const $wrapper = $('<div class="code-block-rollup"></div>');
    const $button = $(
      `<button type="button" class="code-block-toggle" aria-expanded="false" aria-controls="${blockId}" title="Expand code">Expand</button>`
    );

    $pre.attr("id", blockId);
    $pre.wrap($wrapper);
    $pre.before($button);
    setCodeBlockCollapsed($pre);
  });

  $(document).on("click", ".code-block-toggle", function () {
    const $button = $(this);
    const blockId = $button.attr("aria-controls");
    const $pre = $(`#${blockId}`);
    const isExpanded = $button.attr("aria-expanded") === "true";

    if (isExpanded) {
      $button.attr("aria-expanded", "false").attr("title", "Expand code").text("Expand");
      collapseCodeBlock($pre);
      return;
    }

    $button.attr("aria-expanded", "true").attr("title", "Collapse code").text("Collapse");
    expandCodeBlock($pre);
  });
});
