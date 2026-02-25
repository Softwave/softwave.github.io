$(function () {
  const inlineCodeSelector = "main code:not(pre code)";

  $(inlineCodeSelector).each(function (index) {
    const $code = $(this);

    if ($code.parent().hasClass("inline-code-rollup")) {
      return;
    }

    const codeId = `inline-code-${index}`;
    const $wrapper = $('<span class="inline-code-rollup"></span>');
    const $button = $(
      `<button type="button" class="inline-code-toggle" aria-expanded="false" aria-controls="${codeId}" title="Expand code">+</button>`
    );

    $code.attr("id", codeId).addClass("is-collapsed");

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
      $code.addClass("is-collapsed");
      return;
    }

    $button.attr("aria-expanded", "true").attr("title", "Collapse code").text("−");
    $code.removeClass("is-collapsed");
  });
});
