# SAP UI5 Demo Styling Using Standard Classes

SAP UI5 provides a set of standard CSS classes that you can use to style your application.


### Code Explaination

Refer to [/webapp/view/App.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Styling-Using-Standard-Classes/blob/master/webapp/view/App.view.xml "App.view.xml")

To layout the panel, we add the CSS class sapUiResponsiveMargin that will add some space around the panel. We have to set the width of the panel to auto since the margin would otherwise be added to the default width of 100% and exceed the page size.

If you decrease the screen size, then you can actually see that the margin also decreases. As the name suggests, the margin is responsive and adapts to the screen size of the device. Tablets will get a smaller margin and phones in portrait mode will not get a margin to save space on these small screens.

Margins can be added to all kinds of controls and are available in many different options. We can even add space between the button and the input field by adding class sapUiSmallMarginEnd to the button.

To format the output text individually, we remove the description from the input field and add a new Text control with the same value. Here we also use a small margin to align it with the other content. Similarly, we could add the standard padding classes to layout the inner parts of container controls such as our panel, but as it already brings a padding by default, this is not needed here.

----


[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Styling-Using-Standard-Classes/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Styling-Using-Standard-Classes/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 3.gif](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Styling-Using-Standard-Classes/master/screenshots/3.gif "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)