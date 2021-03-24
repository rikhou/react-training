function parseTemplate(str, data) {
  const fn = new Function(
    "obj",
    ` var p=[];
      with(obj){p.push('${str
        .replace(/[\r\t\n]/g, " ")
        .split("<%")
        .join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t")
        .join("');")
        .split("%>")
        .join("p.push('")
        .split("\r")
        .join("\\'")}');}return p.join('');`
  );
  return data ? fn(data) : fn;
}
