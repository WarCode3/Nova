<p align='center'>
  <img src='https://user-images.githubusercontent.com/4079034/29722250-ae54505a-8985-11e7-8324-b32a32bb7643.png' width='64' height='64' alt='Nova Logo' /><br />
  <b>Nova</b>
</p>
<p align='center'>
  Advanced scripting language with better syntax and useful goodies
</p>
<p align='center'>
  <a href="#why"><strong>Why?</strong></a> &middot;
  <a href="#language-overview"><strong>Language Features</strong></a> &middot;
  <a href="#contributing"><strong>Contributing</strong></a>
</p>

# Why?
Nova is a stronger scripting language designed to make life easier in WarCraft III map development. It features a more familiar programming syntax similar to Java or C#, and adds new code controls like for-each and while loops, function scope, enumerators, multi-line comments, and more!

# Language Features

### Functions ###
Less verbose function declarations compared to JASS. Think Java, C#, C++, etc.

**Nova**  
```
bool MyFunction(string s, int i) {
    (statement 1);
    (statement 2);
    return false;
}

MyFunction("hello", 42);
```

**JASS**  
```
function MyFunction takes string s, int i returns boolean
  (statement1)
  (statement2)
  return false
endfunction

call MyFunction("hello", 42)
```

### Variables ###

**Nova**  
```
// Global variables are those outside of function calls
// No need to make a globals block, just define them directly
trigger t = null;
region gg_my_region = ...

int SomeFunc(string s, int i) {
    // Any variable declared inside a function is local
    // No need to specify it's local; no need for the "set" keyword either
    unit u = null;
    u = CreateNewUnit(...);
}

```

**JASS**  
```
globals
  trigger t = null
  region gg_my_region = ...
endglobals

function SomeFunc takes string s, int i returns int
    local unit u = null
    set u = ...
endfunction
```

### Logical conditions ###

**Nova**  
```
// A syntax programmers are more familiar with
if (life == 55) {
    Hello(7, 22);
}
// Logical operators like: !, &&, ||
elseif (!udg_True) {
    ok(myVar, 4, "hello");
}
elseif ((true or true) && false) {
    Strange("helloWorld", 54, false);
}
elseif (udg_IsTriggerEnabled) {
    ThisIsTrue(true);
}
else {
    Yay();
}
```

**JASS**  
```
if life == 55 then
  call Hello(7, 22)
elseif not udg_True then
  call ok(myVar, 4, "hello")
elseif (true or true) and false then
  call Strange("helloWorld", 54, false)
elseif udg_IsTriggerEnabled then
  call ThisIsTrue(true)
else
  call Yay()
endif
```

### Additions ###
(TODO: delete keyword, function scope, enums, etc.)

### Loops ###
JASS is lacking when it comes to loops. Although its `loop` is able to accomplish everything there is with loops, it's nice to have more options to speed up development and write semantic code.

**Nova**  
```
for(int i = 0; i < 10; i++) {
    // do stuff
}
```

```
for(unit u: myCustomUnitGroup) {
    // do stuff with each unit u in the unit group
}
```

```
while(x > 5) {
    // ...
}
```

```
do {
    // something
}
while (unitHp > 300);
```

**JASS**  
```
// This is the only type of loop in JASS
// There are no "for" or "while" loops
loop
  set i = i - 1
  call SetPlayerAbilityAvailable(Player(i), udg_SpellDamageAbility, false)
  exitwhen i == 0
endloop
```

# Contributing
As with all WC3-Nova projects, we love contributions!

**Bugs**  
Please [submit an issue](https://github.com/WC3-Nova/Nova/issues) with a detailed report on how to reproduce the issue.

**Language requests**  
If you have an idea on a new feature that could be added to the language, please check the issues section with tag *feature* to see if someone has already proposed that idea. If not, go ahead and submit it!

**Improvements**  
Fork the project, make your edits, and then submit a pull request. We'll take a look!
