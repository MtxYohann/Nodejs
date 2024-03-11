# NodeJS

c'est un script java executé par un navigateur web, il permet de rendre la page dynamique.
Peut être programmé directement sur une page web.

Vérifier que node est bien installé dans un terminal

```bash
node --version
```

Pour éxecuter un script ;

``` bash
Node " "
```

Installer une dépendance ;

```bash
npm install <nom-de-la-dependance>  --save-dev
```

``let`` et ``const`` sont 2 manières de déclarer des variables en JavaScript. 

``let`` valeur qui peut changer.

``const`` valeur qui ne changera jamais

``var`` var est une variable global (interdit)


### Les fonctions
Syntaxe de base
```bash
function auCarre(x) {
    return x * x;
}
```

Syntaxe fléchée
```bash
const auCarre (x) => {
    return x * x;
}
```

si la fonction ne contient q'une seul instruction, on peut omettre les accolades et le return
```bash
const auCarre = x => x * x;
```

### Les tableaux
```bash
const fruits = ["apple","banana","orange"];
fruits.push("grape");
console.log(fruits);
```
notre variable fruits est mtn ["apple","banana","orange","grape"]

## Modules

un module est un morceau de code réutilisable qui peut être exporté d'un fichier et importé à un autre

Il existe deux syntaxes pour les imports/export en JS :
- La syntaxe CommonJS (utilisée dans Node.js)
- La syntaxe ES6+ (utilisée dans les navigateurs), on parle du format ESM (ECMAScript Modules)