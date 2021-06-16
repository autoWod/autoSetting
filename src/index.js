/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-06-15 10:50:14
 * @LastEditors: lax
 * @LastEditTime: 2021-06-16 15:57:07
 * @FilePath: \auto_setting\src\index.js
 */
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @require 	 https://unpkg.com/flatted@3.1.1/min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	const xmlDoc = document.implementation.createDocument("","",null);

	// storage
	const lib = window.localStorage;

	// 设置 地城\决斗\一般\说明
    const settingType = document.querySelectorAll("#wod-orders > div");

	// 地城
	const dungeon = settingType[0];

	// 重置此页面上的设置
	const reloadSetting = dungeon.querySelector("input[value=重置此页面上的设置]");

	// 设置数据
	const form = document.querySelector("form[action='/wod/spiel/hero/skillconfig.php']");

	// 储存为挑战设置
	const saveChallengeSetting = document.createElement("input");
	saveChallengeSetting.type = "button";
	saveChallengeSetting.value = "挑战";
	reloadSetting.parentNode.insertBefore(saveChallengeSetting,reloadSetting);
	saveChallengeSetting.addEventListener("click",()=>{
		const WOD_CFG = window.WOD_CFG;
		const xs = new XmlSerializer();
		WOD_CFG.serialize(xs);
		xmlDoc(xs.data);
		console.log(xs.data);
		const data = base64_encode(xs.data);
		lib.setItem("test", data);
	})

	// 覆盖本层设置
	const updateSetting = document.createElement("input");
	updateSetting.type = "button";
	updateSetting.value = "覆盖本层设置";
	reloadSetting.parentNode.insertBefore(updateSetting,reloadSetting);

	updateSetting.addEventListener("click",()=>{
		const data = lib.getItem("test");
		const dataInput = form.querySelector("input[name=data]");
		dataInput.value = data;
		form.submit();
		console.log("覆盖")
	})

})();
