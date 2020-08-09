let data = [];
let isUppercase = false;
let isSymbol = false;
let isVbOpen = false;
let isEdit = false;
let dataUpdate = 0;

const lowKeyboard = `
    <div class="keyboard">
        <button onclick="inputHandler('1')">1</button>
        <button onclick="inputHandler('2')">2</button>
        <button onclick="inputHandler('3')">3</button>
        <button onclick="inputHandler('4')">4</button>
        <button onclick="inputHandler('5')">5</button>
        <button onclick="inputHandler('6')">6</button>
        <button onclick="inputHandler('7')">7</button>
        <button onclick="inputHandler('8')">8</button>
        <button onclick="inputHandler('9')">9</button>
        <button onclick="inputHandler('0')">0</button>
        <button onclick="inputHandler('-')">-</button>
        <button onclick="inputHandler('=')">=</button>

        <button onclick="inputHandler('q')" class="q">q</button>
        <button onclick="inputHandler('w')">w</button>
        <button onclick="inputHandler('e')">e</button>
        <button onclick="inputHandler('r')">r</button>
        <button onclick="inputHandler('t')">t</button>
        <button onclick="inputHandler('y')">y</button>
        <button onclick="inputHandler('u')">u</button>
        <button onclick="inputHandler('i')">i</button>
        <button onclick="inputHandler('o')">o</button>
        <button onclick="inputHandler('p')">p</button>
        <button onclick="backspace()" class="backspace">BACKSPACE</button>

        <button onclick="inputHandler('a')" class="a">a</button>
        <button onclick="inputHandler('s')">s</button>
        <button onclick="inputHandler('d')">d</button>
        <button onclick="inputHandler('f')">f</button>
        <button onclick="inputHandler('g')">g</button>
        <button onclick="inputHandler('h')">h</button>
        <button onclick="inputHandler('j')">j</button>
        <button onclick="inputHandler('k')">k</button>
        <button onclick="inputHandler('l')">l</button>
        <button onclick="inputHandler('/')">/</button>
        <button onclick="enter()" class="enter">ENTER</button>

        <button onclick="symbols()" class="symbols">&123</button>
        <button onclick="inputHandler('z')">z</button>
        <button onclick="inputHandler('x')">x</button>
        <button onclick="inputHandler('c')">c</button>
        <button onclick="inputHandler('v')">v</button>
        <button onclick="inputHandler('b')">b</button>
        <button onclick="inputHandler('n')">n</button>
        <button onclick="inputHandler('m')">m</button>
        <button onclick="inputHandler(',')">,</button>
        <button onclick="inputHandler('.')">.</button>
        <button onclick="inputHandler('?')">?</button>
        <button onclick="shift()">CapsLk</button>

        <button onclick="inputHandler(' ')" class="space">SPACE</button>
    </div>
    <div class="close-vb" onclick="showKeyboard()">
        <div class="line line1"></div>
        <div class="line line2"></div>
    </div>
`;

const upKeyboard = `
<div class="keyboard">
    <button onclick="inputHandler('1')">1</button>
    <button onclick="inputHandler('2')">2</button>
    <button onclick="inputHandler('3')">3</button>
    <button onclick="inputHandler('4')">4</button>
    <button onclick="inputHandler('5')">5</button>
    <button onclick="inputHandler('6')">6</button>
    <button onclick="inputHandler('7')">7</button>
    <button onclick="inputHandler('8')">8</button>
    <button onclick="inputHandler('9')">9</button>
    <button onclick="inputHandler('0')">0</button>
    <button onclick="inputHandler('-')">-</button>
    <button onclick="inputHandler('=')">=</button>

    <button onclick="inputHandler('Q')" class="q">Q</button>
    <button onclick="inputHandler('W')">W</button>
    <button onclick="inputHandler('E')">E</button>
    <button onclick="inputHandler('R')">R</button>
    <button onclick="inputHandler('T')">T</button>
    <button onclick="inputHandler('Y')">Y</button>
    <button onclick="inputHandler('U')">U</button>
    <button onclick="inputHandler('I')">I</button>
    <button onclick="inputHandler('O')">O</button>
    <button onclick="inputHandler('P')">P</button>
    <button onclick="backspace()" class="backspace">BACKSPACE</button>

    <button onclick="inputHandler('A')" class="a">A</button>
    <button onclick="inputHandler('S')">S</button>
    <button onclick="inputHandler('D')">D</button>
    <button onclick="inputHandler('F')">F</button>
    <button onclick="inputHandler('G')">G</button>
    <button onclick="inputHandler('H')">H</button>
    <button onclick="inputHandler('J')">J</button>
    <button onclick="inputHandler('K')">K</button>
    <button onclick="inputHandler('L')">L</button>
    <button onclick="inputHandler('/')">/</button>
    <button onclick="enter()" class="enter">ENTER</button>

    <button onclick="symbols()" class="symbols">&123</button>
    <button onclick="inputHandler('Z')">Z</button>
    <button onclick="inputHandler('X')">X</button>
    <button onclick="inputHandler('C')">C</button>
    <button onclick="inputHandler('V')">V</button>
    <button onclick="inputHandler('B')">B</button>
    <button onclick="inputHandler('N')">N</button>
    <button onclick="inputHandler('M')">M</button>
    <button onclick="inputHandler(',')">,</button>
    <button onclick="inputHandler('.')">.</button>
    <button onclick="inputHandler('?')">?</button>
    <button onclick="shift()">CapsLk</button>

    <button onclick="inputHandler(' ')" class="space">SPACE</button>
</div>
<div class="close-vb" onclick="showKeyboard()">
    <div class="line line1"></div>
    <div class="line line2"></div>
</div>
`;

const symbolsKeyboard = `
    <div class="keyboard">
        <div class="symbols-key">
            <button onclick="inputHandler('!')">!</button>
            <button onclick="inputHandler('@')">@</button>
            <button onclick="inputHandler('#')">#</button>
            <button onclick="inputHandler('$')">$</button>
            <button onclick="inputHandler('%')">%</button>
            <button onclick="inputHandler('&')">&</button>
            <button onclick="inputHandler('*')">*</button>
            <button onclick="inputHandler('(')">(</button>
            <button onclick="inputHandler(')')">)</button>
            <button onclick="inputHandler('_')">_</button>
            <button onclick="inputHandler('{')">{</button>
            <button onclick="inputHandler('[')">[</button>
            <button onclick="inputHandler(']')">]</button>
            <button onclick="inputHandler('}')">}</button>
            <button onclick="inputHandler("'")">'</button>
            <button onclick="inputHandler('"')">"</button>
            <button onclick="inputHandler(':')">:</button>
            <button onclick="inputHandler(';')">;</button>
            <button onclick="inputHandler('~')">~</button>
            <button onclick="inputHandler('\`')">\`</button>
            <button onclick="inputHandler('|')">|</button>
            <button onclick="inputHandler('^')">^</button>
            <button onclick="inputHandler('/')">/</button>
            <button onclick="inputHandler('-')">-</button>
            <button onclick="inputHandler('=')">=</button>
            <button onclick="inputHandler('?')">?</button>
            <button onclick="inputHandler('.')">.</button>
            <button onclick="inputHandler(',')">,</button>
            <button onclick="symbols()" class="abc">ABC</button>
        </div>

        <div class="numpad">
            <button onclick="inputHandler('1')">1</button>
            <button onclick="inputHandler('2')">2</button>
            <button onclick="inputHandler('3')">3</button>
            <button onclick="inputHandler('4')">4</button>
            <button onclick="inputHandler('5')">5</button>
            <button onclick="inputHandler('6')">6</button>
            <button onclick="inputHandler('7')">7</button>
            <button onclick="inputHandler('8')">8</button>
            <button onclick="inputHandler('9')">9</button>
            <button onclick="inputHandler('0')" class="zero">0</button>
        </div>
    </div>
    <div class="close-vb" onclick="showKeyboard()">
        <div class="line line1"></div>
        <div class="line line2"></div>
    </div>
`;

const keyboardContainer = document.querySelector('.keyboard-container');
const todosContainer = document.querySelector('.todos-container');
const formSubmit = document.querySelector('.submit');
const openVb = document.querySelector('.open-vb');
const todoInput = document.querySelector('#todo-input');

const createKeyboard = (isShift) => {
    keyboardContainer.innerHTML = '';
    if (isShift) {
        keyboardContainer.innerHTML = upKeyboard;
    } else {
        keyboardContainer.innerHTML = lowKeyboard;
    }
}

const createSymbolKey = isSymbol => {
    keyboardContainer.innerHTML = '';
    if (isSymbol) {
        keyboardContainer.innerHTML = symbolsKeyboard;
    } else {
        keyboardContainer.innerHTML = lowKeyboard;
    }
}

const inputHandler = (char) => {
    document.forms[0][0].value = document.forms[0][0].value + char;
    todoInput.focus();
};

const backspace = () => {
    let num = document.forms[0][0].value;
    document.forms[0][0].value = num.substring(0, num.length - 1);
}

const inject = () => {
    if (data.length == 0) {
        todosContainer.innerHTML = `
            <h3>There is no Todo to do</h3>
        `
    } else {
        todosContainer.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = `
                <li class="todo">
                    <h3>${data[i]}</h3>
                    <button onclick="editData(${i})">Edit</button>
                    <button onclick="deleteData(${i})">Delete</button>
                </li>
            `
            todosContainer.appendChild(li);
        }
    }
}

const submit = () => {
    if (document.forms[0][0].value == '') {
        alert('Empty ToDo is not allowed!')
    } else {
        data.push(document.forms[0][0].value);
        inject();
        todosContainer.scrollTop = todosContainer.scrollHeight;
    }
}

const deleteData = i => {
    data.splice(i, 1);
    inject();
}

const editData = i => {
    isEdit = true;
    dataUpdate = i;
    todoInput.focus();
    todoInput.value = data[i];
    formSubmit.innerText = 'Update';
}

const shift = () => {
    isUppercase = !isUppercase;
    createKeyboard(isUppercase);
}

const enter = () => {
    if (isEdit) {
        isEdit = false;
        data[dataUpdate] = document.forms[0][0].value;
        formSubmit.innerText = 'Submit';
        inject();
    } else {
        submit();
    }
    document.forms[0][0].value = '';
}

const symbols = () => {
    isSymbol = !isSymbol;
    createSymbolKey(isSymbol);
}

const showKeyboard = () => {
    console.log(todosContainer.scrollTop, todosContainer.scrollHeight);
    isVbOpen = !isVbOpen;
    if (isVbOpen) {
        keyboardContainer.style.animation = '0.7s slideUp ease';
        keyboardContainer.style.transform = 'translateY(0)';
        openVb.innerText = 'Close Virtual Keyboard';
        if (data == 0) {
            ''
        } else {
            todosContainer.style.height = 'calc(100vh - 520px)';
        }
        todosContainer.scrollTop = todosContainer.scrollHeight;
    } else {
        keyboardContainer.style.animation = '0.7s slideDown ease';
        keyboardContainer.style.transform = 'translateY(100%)';
        openVb.innerText = 'Bored? Try our Virtual Keyboard!';
        if (data == 0) {
            ''
        } else {
            todosContainer.style.height = 'unset';
            todosContainer.style.maxHeight = '390px';
        }
    }
}

formSubmit.onclick = e => {
    e.preventDefault();
    if (isEdit) {
        isEdit = false;
        data[dataUpdate] = document.forms[0][0].value;
        formSubmit.innerText = 'Submit';
        inject();
    } else {
        submit();
    }
    document.forms[0][0].value = '';
}

openVb.onclick = () => showKeyboard();

inject();
createKeyboard(isUppercase);