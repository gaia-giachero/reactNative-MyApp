# __REACT NATIVE__

## CAMBIARE IL FONT
1. **Scaricare i Font**: Procurati i file dei font (es. da Google Fonts) e assicurati che siano in formato .ttf o .otf.
2. **Organizzare le Cartelle**: Crea una cartella assets e, al suo interno, una cartella fonts nella directory principale (root) del tuo progetto: mkdir -p assets/fonts.
3. **Spostare i Font**: Copia i file dei font (es. NomeFont-Regular.ttf) in assets/fonts.
    * *Nota*: È consigliato rinominare i file affinché coincidano con il nome completo del font per evitare problemi su Android.
4. **Configurare il Progetto**: Crea un file chiamato react-native.config.js nella root del progetto e aggiungi:

``` javascript
// javascript
module.exports = {
  assets: ['./assets/fonts'],
};
```

5. **Linkare i Font**: Esegui il comando seguente nel terminale per copiare i font nelle cartelle native di Android e iOS:

``` bash
# bash
npx react-native-asset
```

6. **Utilizzare il Font**: Applica il font nel tuo codice JavaScript utilizzando la proprietà fontFamily:
    * *Nota*: Nota: Su Android, il nome da usare in fontFamily spesso corrisponde al nome del file (senza estensione)

``` javascript
// javascript
<Text style={{ fontFamily: 'NomeFont-Regular', fontSize: 20 }}>
  Testo con font personalizzato
</Text>
```  