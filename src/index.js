/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-06-15 10:50:14
 * @LastEditors: lax
 * @LastEditTime: 2021-06-15 17:11:15
 * @FilePath: \auto_setting\src\index.js
 */
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	// const lib = windows.localStorage;

	// 设置 地城\决斗\一般\说明
    const settingType = document.querySelectorAll("#wod-orders > div");

	// 决斗
	const dungeon = settingType[0];

	// 重置此页面上的设置
	const reloadSetting = dungeon.querySelector("input[value=重置此页面上的设置]");

	// 储存本层设置
	const saveSetting = document.createElement("input");
	saveSetting.type = "button";
	saveSetting.value = "储存本层设置";
	reloadSetting.parentNode.insertBefore(saveSetting,reloadSetting);

	// 覆盖本层设置
	const updateSetting = document.createElement("input");
	updateSetting.type = "button";
	updateSetting.value = "覆盖本层设置";
	reloadSetting.parentNode.insertBefore(updateSetting,reloadSetting);

	const settingSelect = document.createElement("select");


	

    console.log(settingType.parentNode);
})();
