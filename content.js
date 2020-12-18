// content.js

fieldset = document.getElementsByTagName("fieldset")[0]
accounts = fieldset.children

signin = document.getElementById("input_signin_button")
select = document.createElement('select')

for (let account of accounts) {
    fullAccountName = account.getElementsByClassName("saml-account-name")[0].innerText
    accountName = fullAccountName.substring(15)
    radio = account.getElementsByClassName("saml-radio")[0]

    idparts = radio.id.split("/")
    role = idparts[idparts.length -1]

    selecttext = accountName + " " + role

    option = document.createElement('option')
    option.innerText = selecttext
    option.setAttribute("value", radio.id)
    
    select.appendChild(option)
    select.setAttribute("class", "selector")
}

fieldset.style.display = "none"
signin.prepend(select)

$(select).change(function(e) {
    selectElement = e.srcElement
    $('.selector').find(':selected').data('value');

    radio = document.getElementById($('.selector').find(':selected').val())
    radio.checked = true
})

$(document).ready(function() {
    $(".selector").select2()
});