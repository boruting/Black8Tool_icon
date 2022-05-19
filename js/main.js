/** 
 * 样式类型切图
*/


var outputTextJs = function () {

    cs = new CSInterface();
    //alert("111111");
    nameTypeVal = $('#nameType option:selected').val();
    //alert("2");
    in_extendPath = cs.getSystemPath(SystemPath.EXTENSION);
    //alert("3");

    try {
        //alert("31");
        pat = escapeString(fileid.files[0].path);
    } catch (e) { alert("没有文档"); }

    //alert("1111");


    //assetsName = "assetsText";
    //assetsName = txt_assets.value;
    //sheetName = txt_sheet.value;
    //alert("3  " + nameTypeVal);
    cs.evalScript("outputText('" + pat + "','" + nameTypeVal + "','" + in_extendPath + "')");
    //cs.evalScript("isEnd('" + obj_01 + "')");
    //cs.evalScript("outputText('" + nameTypeVal + "','" + in_extendPath + "')");
    //cs.evalScript("outputText('" + pat + "','" + assetsName + "','" + typeVal + "','" + in_extendPath + "')");

}



/** 
 * 转义字符 
*/
function escapeString(inString) {
    inString = inString.replace(/\\/g, "\\\\");
    return inString;
}

