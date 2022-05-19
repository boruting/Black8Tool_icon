/**
 * 加载脚本
 * @param {*} in_extendPath CEP路径
*/
var initEnzymes = function (in_extendPath, JsxType) {
    extendPath = in_extendPath;
    switch (JsxType) {
        case "testJsx":
            alert("120932");
            $.evalFile(extendPath + "/jsx/black8_Icon.jsx");
            alert("123123123123132");
            //$.global.alertTest=alertTest; //调试脚本
            return;

        case "outputText":
            $.evalFile(extendPath + "/js/helper.js");
            $.evalFile(extendPath + "/jsx/outputText/handlePX.jsx");
            $.evalFile(extendPath + "/jsx/outputText/parseFile.jsx");
            //alert("123123123123132");
            $.global.parseFile = parseFile; //解析 excel 文档并 切图 输出
            return;

        case "rename":
            $.evalFile(extendPath + "/jsx/rename/getArtLayerByItemIndex.jsx");
            $.evalFile(extendPath + "/jsx/rename/getSelectedLayerItemIndex.jsx");
            $.evalFile(extendPath + "/jsx/rename/layerItemIndexToName.jsx");
            $.global.getArtLayerByItemIndex = getArtLayerByItemIndex;
            $.global.getSelectedLayerItemIndex = getSelectedLayerItemIndex;
            //$.global.layerItemIndexToName = layerItemIndexToName;
            return;
        default:
            return;
    }

}
/**
 * 样式切图
 * @param {*} pat excelFile
 * @param {*} assetsName 文件夹名称
 * @param {*} sheetName 表格页签名称
 * @param {*} imgTypeVal 切图类型 （实际像素type_2,固定尺寸type_1）
 * @param {*} nameTypeVal 图片名字类型 nameType2 为 序号_类型名 nameType1 为 类型名_序号
 * @param {*} in_extendPath CEP路径
 */


//$.global.black8_Icon = black8_Icon;
//$.evalFile(File($.fileName).parent + "/black8_Icon.jsx");

//var outputText = function (pat, assetsName,sheetName, typeVal,in_extendPath){
//var doc = app.activeDocument;
var obj_01 = {};
obj_01.isEnd = false;

var outputText = function (jsonFile, nameTypeVal, in_extendPath) {
    
    $.evalFile(in_extendPath + "/jsx/lib/json2.jsx");
    $.evalFile(in_extendPath + "/jsx/lib/kersBoru_lib.jsx");
    $.evalFile(in_extendPath + "/jsx/black8_Icon.jsx");
    //$.global.mainL=main; 
    //alert("1");
    try {
        JSON
        //alert("131");
    } catch (e) {
        $.writeln("1因为未载入 JSON 解析库，请载入 json2.jsx ");
    }

    //alert("12");
    var projectData = projectName(nameTypeVal);
    //var pat_img = projectName_.img;//后续需要改成配置的
    //alert("2s");
    var jsonFile = new File(jsonFile);
    //alert("1111  " + nameTypeVal);
    main(jsonFile, projectData);

    //parseFile(pat, assetsName,sheetName, typeVal);
    //parseFile(pat, assetsName, imgTypeVal, nameTypeVal);

}

function projectName(name) {

    var project = {};

    if (name === "sg2") {//三国2
        project.img = "D:/Black8/sg2/svn/ui/upload/T图标/";
        project.psd = "//版本公用计算机/美术资源共享文件夹1/天天幻灵美术/天天怼三国最终/lib/原始文件/";
    }
    if (name === "bjj_tw") {//百将决-繁
        project.img = "D:/Black8/bjj/svn/ui/upload/T图标/";
        project.psd = "//版本公用计算机/美术资源共享文件夹1/天天幻灵美术/百将诀/lib/原始文件/";
    }
    if (name === "bjj_cn") {//百将决-简
        //alert("cn");
        project.img = "D:/Black8/bjj_cn/svn/ui/upload/T图标/";
        project.psd = "//版本公用计算机/美术资源共享文件夹1/天天幻灵美术/百将诀/lib/原始文件/";
    }
    if (name === "72bian") {//百将决
        project.img = "D:/Black8/72bian/svn/ui/upload/T图标/";
        project.psd = "//版本公用计算机/美术资源共享文件夹1/天天幻灵美术/72变/lib/原始文件/";


    }
    return project;

}
//outputText();