module.exports=class o{constructor(o,t=!0){if(!o||"object"!=typeof o)throw this.infoList(),Error("C\xf3digo informativo: 01;");"object"!=typeof t&&(t=!0),this.warns=t;try{this.database=o.database(),!0===t&&(console.log("Firebase Shorten [DEV mode]. C\xf3digo informativo: 03;"),this.infoList())}catch(e){throw this.infoList(),Error("C\xf3digo informativo: 02;")}}set(o,t){if(!o)throw this.infoList(),Error("C\xf3digo informativo: 04;");if(!t||"object"!=typeof t)throw this.infoList(),Error("C\xf3digo informativo: 05;");this.database.ref(o).update(t)}update(o,t){this.set(o,t)}push(o,t){if(!o)throw this.infoList(),Error("C\xf3digo informativo: 04;");if(!t||"object"!=typeof t)throw this.infoList(),Error("C\xf3digo informativo: 05;");this.database.ref(o).push(t)}delete(o){if(!o||"string"!=typeof o)throw this.infoList(),Error("C\xf3digo informativo: 04;");this.database.ref(o).remove()}remove(o){this.delete(o)}async getAllData(){var o=null;return await this.database.ref("/").once("value").then(t=>{o=t.exists()&&t.val()?t.val():null}),Promise.resolve(o).then(o=>o)}async latency(){let o=Date.now();return Math.round(await this.database.ref("shorten").once("value").then(()=>Date.now()-o))}async ping(){this.latency()}infoList(){console.table([["01","Problemas com  o valor do objeto 'firebase'."],["02","Erro ao se conectar com o firebase."],["03","Conectado ao firebase com sucesso."],["04","Erro relacionado ao caminho de refer\xeancia REF no banco de dados.",],["05","Erro relacionado ao tipo do valor."],["warns = false","Avisos do modo desenvolvedor desativados"],["warns = true","Avisos do modo desenvolvedor ativados (Padr\xe3o)"],])}};