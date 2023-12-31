sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	],function(UIComponent,JSONModel){
	"use strict";	
		return UIComponent.extend("com.vaibhavmojidra.stylingdemousingstandardclasses.Component",{
			metadata:{
				interfaces: ["sap.ui.core.IAsyncContentCreation"],
				manifest: "json"
			},
			init:function(){
				UIComponent.prototype.init.apply(this, arguments);
				var oData={
					name:"Vaibhav"
				};
				
				var oModel=new JSONModel(oData);
				this.setModel(oModel);
			}
		});
	}
);