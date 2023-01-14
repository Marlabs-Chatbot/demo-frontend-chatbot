function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */


include('./Static/js/components/chat.js');
include('./Static/js/components/botTyping.js');
include('./Static/js/components/suggestonButtons.js');
include('./Static/js/components/collapsible.js')
include('./Static/js/components/cardsCarousel.js')
include('./Static/js/components/addressCollapsable.js')
include('./Static/js/components/inputForm.js')

include('./Static/js/components/typingSuggestionButtons.js');