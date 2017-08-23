var flashCardCloze= function(text, cloze){
    this.cloze= cloze;
    this.partial= " ... " + text;
    this.fullText= cloze + text;
    this.err=function (err) {
        if (err){
            console.log(err);
        }
    }
};
module.exports = flashCardCloze;