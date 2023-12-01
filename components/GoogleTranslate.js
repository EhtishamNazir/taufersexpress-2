import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";

const GoogleTranslate = () => {

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: "en,it,de", // include this for selected languages
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');

    }


    return (
        <div>
            <div id="google_translate_element" > </div>
        </div>
    )
}

export default GoogleTranslate;
