function scroll_workspace_to_end() {
    document.getElementById("messages").scrollTo(0, document.getElementById("messages").scrollHeight);
}

function clear_message_input() {
    message_text = document.getElementById("message-content-input").value = ""
}

function make_new_message_from(content) {
    message = document.createElement("div")
    message.classList.add("message") 
    message.classList.add("message-from")
    message.innerText = content
    document.getElementById("messages").appendChild(message) 
}

function make_new_message_to_me(content) {
    message = document.createElement("div")
    message.classList.add("message") 
    message.classList.add("message-to-me")
    message.innerText = content
    document.getElementById("messages").appendChild(message) 
}

function make_input_readonly() {
    document.getElementById("message-content-input").readOnly = true;
}

function make_input_not_readonly() {
    document.getElementById("message-content-input").readOnly = false;
}

function send_message() {
    message_text = document.getElementById("message-content-input").value
    if (message_text.length == 0) return;
    
    make_input_not_readonly()
    make_new_message_from(message_text)
    make_input_not_readonly()

    scroll_workspace_to_end()
    clear_message_input()
}

function get_login_and_password() {
    data = getCookie('authorization-data', true)

    if (data == undefined) {
        while (data == undefined || data == "") {
            data = prompt("Enter your login:", undefined)
        }
        login = data
        data = undefined
        while (data == undefined || data == "") {
            data = prompt("Enter your password:", undefined)
        }
        password = data
        data = {login: login, password: password}
        setCookie('authorization-data', data)
    }
    else {
        login = data.login
        password = data.password
    }
    return data
}