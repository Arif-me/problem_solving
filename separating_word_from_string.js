// for only Alphabet & space
str.replace(/[^a-zA-Z ]+/g, '').replace('/ {2,}/', ' ');

//another way
.replace( /[^a-zA-Z ]/g, '').replace( /\s\s+/g, ' ' );

//another way
sentence.match(/[^_\W]+/g).join(' ');

//fro ANSI english
.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ");

//another way
str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");