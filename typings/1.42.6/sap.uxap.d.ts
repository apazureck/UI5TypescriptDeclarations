declare module 'sap.uxap' {
	export = sap.uxap;
}

/**
 * SAP UxAP
 */
declare namespace sap.uxap {

	class AnchorBar extends sap.m.Toolbar {
		/**
		 * Constructor for a new AnchorBar.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.AnchorBarMetadata);
		/**
		 * Constructor for a new AnchorBar.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Creates a new subclass of class sap.uxap.AnchorBar with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|AnchorBarMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.m.Toolbar with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @note Overload from base type sap.m.Toolbar
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.m.ToolbarMetadata, FNMetaImpl?: any): any;
		/**
		 * Returns a sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.
		 * @return 
		 */
		getScrollDelegate(): any;
		/**
		 * ID of the element which is the current target of the association <code>selectedButton</code>, or <code>null</code>.
		 * @return 
		 */
		getSelectedButton(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>showPopover</code>.
		 * 
		 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showPopover</code>
		 */
		getShowPopover(): boolean;
		/**
		 * Gets current value of property <code>upperCase</code>.
		 * 
		 * Determines whether the Anchor bar items are displayed in upper case.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>upperCase</code>
		 */
		getUpperCase(): boolean;
		/**
		 * Scroll to a specific Section.
		 * @param sId The Section ID to scroll to
		 * @param duration Scroll duration (in ms). Default value is 0
		 */
		scrollToSection(sId: string, duration: number);
		/**
		 * Sets the associated <code>selectedButton</code>.
		 * @param oSelectedButton ID of an element which becomes the new target of this selectedButton association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setSelectedButton(oSelectedButton: sap.ui.core.ID|sap.m.Button): AnchorBar;
		/**
		 * Sets a new value for property <code>showPopover</code>.
		 * 
		 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowPopover New value for property <code>showPopover</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowPopover(bShowPopover: boolean): AnchorBar;
		/**
		 * Sets a new value for property <code>upperCase</code>.
		 * 
		 * Determines whether the Anchor bar items are displayed in upper case.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bUpperCase New value for property <code>upperCase</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setUpperCase(bUpperCase: boolean): AnchorBar;
	}

	class BlockBase extends sap.ui.core.Control {
		/**
		 * Constructor for a new BlockBase.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.BlockBaseMetadata);
		/**
		 * Constructor for a new BlockBase.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some mapping to the aggregation <code>mappings</code>.
		 * @param oMapping the mapping to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addMapping(oMapping: ModelMapping): BlockBase;
		/**
		 * Destroys all the mappings in the aggregation <code>mappings</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyMappings(): BlockBase;
		/**
		 * Creates a new subclass of class sap.uxap.BlockBase with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|BlockBaseMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets current value of property <code>columnLayout</code>.
		 * 
		 * Determines on how columns the layout will be rendered.
		 * Allowed values are integers from 1 to 4 and "auto".
		 * 
		 * Default value is <code>auto</code>.
		 * @return Value of property <code>columnLayout</code>
		 */
		getColumnLayout(): BlockBaseColumnLayout;
		/**
		 * Gets current value of property <code>formAdjustment</code>.
		 * 
		 * Determines if the block should automatically adjust its inner forms.
		 * Allowed values are "BlockColumns" and "OneColumn" and "None".
		 * If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block.
		 * If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block.
		 * If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
		 * 
		 * Default value is <code>BlockColumns</code>.
		 * @return Value of property <code>formAdjustment</code>
		 */
		getFormAdjustment(): BlockBaseFormAdjustment;
		/**
		 * Gets content of aggregation <code>mappings</code>.
		 * 
		 * Map external UI5 model and internal Block model
		 * @return 
		 */
		getMappings(): ModelMapping[];
		/**
		 * Gets current value of property <code>mode</code>.
		 * 
		 * Determines the mode of the block.
		 * When block is used inside ObjectPage this mode is inherited my the SubSection.
		 * The mode of the block is changed when SubSection mode changes.
		 * @return Value of property <code>mode</code>
		 */
		getMode(): string;
		/**
		 * ID of the element which is the current target of the association <code>selectedView</code>, or <code>null</code>.
		 * @return 
		 */
		getSelectedView(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>showSubSectionMore</code>.
		 * 
		 * Determines whether the show more button should be shown.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showSubSectionMore</code>
		 */
		getShowSubSectionMore(): boolean;
		/**
		 * Gets current value of property <code>visible</code>.
		 * 
		 * Determines the visibility of the block.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visible</code>
		 */
		getVisible(): boolean;
		/**
		 * Checks for the provided <code>sap.uxap.ModelMapping</code> in the aggregation <code>mappings</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oMapping The mapping whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfMapping(oMapping: ModelMapping): number;
		/**
		 * Inserts a mapping into the aggregation <code>mappings</code>.
		 * @param oMapping the mapping to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the mapping should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the mapping is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the mapping is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertMapping(oMapping: ModelMapping, iIndex: number): BlockBase;
		/**
		 * Removes all the controls from the aggregation <code>mappings</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllMappings(): ModelMapping[];
		/**
		 * Removes a mapping from the aggregation <code>mappings</code>.
		 * @param vMapping The mapping to remove or its index or id
		 * @return The removed mapping or <code>null</code>
		 */
		removeMapping(vMapping: number|string|ModelMapping): ModelMapping;
		/**
		 * Set the column layout for this particular block.
		 * @param sLayout The column layout to apply to the control
		 */
		setColumnLayout(sLayout: string);
		/**
		 * Sets a new value for property <code>formAdjustment</code>.
		 * 
		 * Determines if the block should automatically adjust its inner forms.
		 * Allowed values are "BlockColumns" and "OneColumn" and "None".
		 * If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block.
		 * If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block.
		 * If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>BlockColumns</code>.
		 * @param sFormAdjustment New value for property <code>formAdjustment</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setFormAdjustment(sFormAdjustment: BlockBaseFormAdjustment): BlockBase;
		/**
		 * Set the view mode for this particular block.
		 * @param sMode the mode to apply to the control (that should be synchronized with view declared)
		 * @return this
		 */
		setMode(sMode: string): any;
		/**
		 * Sets the associated <code>selectedView</code>.
		 * @param oSelectedView ID of an element which becomes the new target of this selectedView association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setSelectedView(oSelectedView: sap.ui.core.ID|sap.ui.core.Control): BlockBase;
		/**
		 * Setter for the visibility of the block.
		 */
		setVisible();
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead of the real control
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @note Overload from base type sap.ui.core.Control
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setVisible(bVisible: boolean): sap.ui.core.Control;
	}

	class BlockBaseFormAdjustment {
		/**
		 * Any form within the block will be automatically adjusted to have as many columns as the colspan of its parent block.
		 */
		static BlockColumns: string;
		/**
		 * No automatic adjustment of forms.
		 */
		static None: string;
		/**
		 * Any form within the block will be automatically adjusted to have only one column.
		 */
		static OneColumn: string;
	}

	class BreadCrumbs extends sap.ui.core.Control {
		/**
		 * Constructor for a new BreadCrumbs.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.BreadCrumbsMetadata);
		/**
		 * Constructor for a new BreadCrumbs.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some link to the aggregation <code>links</code>.
		 * @param oLink the link to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addLink(oLink: sap.m.Link): BreadCrumbs;
		/**
		 * Destroys the currentLocation in the aggregation <code>currentLocation</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyCurrentLocation(): BreadCrumbs;
		/**
		 * Destroys all the links in the aggregation <code>links</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyLinks(): BreadCrumbs;
		/**
		 * Creates a new subclass of class sap.uxap.BreadCrumbs with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|BreadCrumbsMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets content of aggregation <code>currentLocation</code>.
		 * 
		 * The current/last element in the BreadCrumbs path.
		 * @return 
		 */
		getCurrentLocation(): sap.m.Text;
		/**
		 * Gets content of aggregation <code>links</code>.
		 * 
		 * A list of all the active link elements in the BreadCrumbs control.
		 * @return 
		 */
		getLinks(): sap.m.Link[];
		/**
		 * Gets current value of property <code>showCurrentLocation</code>.
		 * 
		 * Sets the visibility of the current/last element in the BreadCrumbs path.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showCurrentLocation</code>
		 */
		getShowCurrentLocation(): boolean;
		/**
		 * Checks for the provided <code>sap.m.Link</code> in the aggregation <code>links</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oLink The link whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfLink(oLink: sap.m.Link): number;
		/**
		 * Inserts a link into the aggregation <code>links</code>.
		 * @param oLink the link to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the link should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the link is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the link is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertLink(oLink: sap.m.Link, iIndex: number): BreadCrumbs;
		/**
		 * Removes all the controls from the aggregation <code>links</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllLinks(): sap.m.Link[];
		/**
		 * Removes a link from the aggregation <code>links</code>.
		 * @param vLink The link to remove or its index or id
		 * @return The removed link or <code>null</code>
		 */
		removeLink(vLink: number|string|sap.m.Link): sap.m.Link;
		/**
		 * Sets the aggregated <code>currentLocation</code>.
		 * @param oCurrentLocation The currentLocation to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setCurrentLocation(oCurrentLocation: sap.m.Text): BreadCrumbs;
		/**
		 * Sets a new value for property <code>showCurrentLocation</code>.
		 * 
		 * Sets the visibility of the current/last element in the BreadCrumbs path.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowCurrentLocation New value for property <code>showCurrentLocation</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowCurrentLocation(bShowCurrentLocation: boolean): BreadCrumbs;
	}

	class HierarchicalSelect extends sap.m.Select {
		/**
		 * Constructor for a new HierarchicalSelect.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.HierarchicalSelectMetadata);
		/**
		 * Constructor for a new HierarchicalSelect.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Creates a new subclass of class sap.uxap.HierarchicalSelect with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Select.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|HierarchicalSelectMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.m.Select with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @note Overload from base type sap.m.Select
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.m.SelectMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets current value of property <code>upperCase</code>.
		 * 
		 * Determines whether the HierarchicalSelect items are displayed in upper case.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>upperCase</code>
		 */
		getUpperCase(): boolean;
		/**
		 * Sets a new value for property <code>upperCase</code>.
		 * 
		 * Determines whether the HierarchicalSelect items are displayed in upper case.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bUpperCase New value for property <code>upperCase</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setUpperCase(bUpperCase: boolean): HierarchicalSelect;
	}

	class Importance {
		/**
		 * High importance of the content
		 */
		static High: string;
		/**
		 * Low importance of the content
		 */
		static Low: string;
		/**
		 * Medium importance of the content
		 */
		static Medium: string;
	}

	class ModelMapping extends sap.ui.core.Element {
		/**
		 * Constructor for a new ModelMapping.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given(optional)
		 * @param mSettings Initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ModelMappingMetadata);
		/**
		 * Constructor for a new ModelMapping.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId ID for the new control, generated automatically if no ID is given(optional)
		 * @param mSettings Initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Creates a new subclass of class sap.uxap.ModelMapping with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ModelMappingMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Gets current value of property <code>externalModelName</code>.
		 * 
		 * Determines the the external model name.
		 * @return Value of property <code>externalModelName</code>
		 */
		getExternalModelName(): string;
		/**
		 * Gets current value of property <code>externalPath</code>.
		 * 
		 * Determines the the external path.
		 * @return Value of property <code>externalPath</code>
		 */
		getExternalPath(): string;
		/**
		 * Gets current value of property <code>internalModelName</code>.
		 * 
		 * Determines the the internal model name.
		 * 
		 * Default value is <code>Model</code>.
		 * @return Value of property <code>internalModelName</code>
		 */
		getInternalModelName(): string;
		/**
		 * Sets a new value for property <code>externalModelName</code>.
		 * 
		 * Determines the the external model name.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sExternalModelName New value for property <code>externalModelName</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setExternalModelName(sExternalModelName: string): ModelMapping;
		/**
		 * Sets a new value for property <code>externalPath</code>.
		 * 
		 * Determines the the external path.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sExternalPath New value for property <code>externalPath</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setExternalPath(sExternalPath: string): ModelMapping;
		/**
		 * Sets a new value for property <code>internalModelName</code>.
		 * 
		 * Determines the the internal model name.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Model</code>.
		 * @param sInternalModelName New value for property <code>internalModelName</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setInternalModelName(sInternalModelName: string): ModelMapping;
	}

	class ObjectPageConfigurationMode {
		/**
		 * Determines the JSON model
		 */
		static JsonModel: string;
		/**
		 * Determines the JSON url
		 */
		static JsonURL: string;
	}

	class ObjectPageHeader extends sap.ui.core.Control {
		/**
		 * Constructor for a new ObjectPageHeader.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageHeaderMetadata);
		/**
		 * Constructor for a new ObjectPageHeader.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some action to the aggregation <code>actions</code>.
		 * @param oAction the action to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addAction(oAction: sap.ui.core.Control): ObjectPageHeader;
		/**
		 * Adds some breadCrumbLink to the aggregation <code>breadCrumbsLinks</code>.
		 * @param oBreadCrumbLink the breadCrumbLink to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addBreadCrumbLink(oBreadCrumbLink: sap.m.Link): ObjectPageHeader;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>markChangesPress</code> event of this <code>sap.uxap.ObjectPageHeader</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
		 * 
		 * The event is fired when the unsaved changes button is pressed
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param fnFunction The function to be called when the event occurs
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		attachMarkChangesPress(oData: any, fnFunction: any, oListener?: any): ObjectPageHeader;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>markLockedPress</code> event of this <code>sap.uxap.ObjectPageHeader</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
		 * 
		 * The event is fired when the Locked button is pressed
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param fnFunction The function to be called when the event occurs
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		attachMarkLockedPress(oData: any, fnFunction: any, oListener?: any): ObjectPageHeader;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>titleSelectorPress</code> event of this <code>sap.uxap.ObjectPageHeader</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
		 * 
		 * The event is fired when the objectPage header title selector (down-arrow) is pressed
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param fnFunction The function to be called when the event occurs
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		attachTitleSelectorPress(oData: any, fnFunction: any, oListener?: any): ObjectPageHeader;
		/**
		 * Destroys all the actions in the aggregation <code>actions</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyActions(): ObjectPageHeader;
		/**
		 * Destroys all the breadCrumbsLinks in the aggregation <code>breadCrumbsLinks</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyBreadCrumbsLinks(): ObjectPageHeader;
		/**
		 * Destroys the navigationBar in the aggregation <code>navigationBar</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyNavigationBar(): ObjectPageHeader;
		/**
		 * Destroys the sideContentButton in the aggregation <code>sideContentButton</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroySideContentButton(): ObjectPageHeader;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>markChangesPress</code> event of this <code>sap.uxap.ObjectPageHeader</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		detachMarkChangesPress(fnFunction: any, oListener: any): ObjectPageHeader;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>markLockedPress</code> event of this <code>sap.uxap.ObjectPageHeader</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		detachMarkLockedPress(fnFunction: any, oListener: any): ObjectPageHeader;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>titleSelectorPress</code> event of this <code>sap.uxap.ObjectPageHeader</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		detachTitleSelectorPress(fnFunction: any, oListener: any): ObjectPageHeader;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageHeader with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageHeaderMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Fires event <code>markChangesPress</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>domRef</code> of type <code>string</code>DOM reference of the changed item's icon to be used for positioning.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		fireMarkChangesPress(mArguments?: any): ObjectPageHeader;
		/**
		 * Fires event <code>markLockedPress</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>domRef</code> of type <code>string</code>DOM reference of the lock item's icon to be used for positioning.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		fireMarkLockedPress(mArguments?: any): ObjectPageHeader;
		/**
		 * Fires event <code>titleSelectorPress</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>domRef</code> of type <code>string</code>DOM reference of the title item's icon to be used for positioning.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		fireTitleSelectorPress(mArguments?: any): ObjectPageHeader;
		/**
		 * Gets content of aggregation <code>actions</code>.
		 * 
		 * List of actions that will be displayed in the header.
		 * You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu).
		 * You can use ObjectPageHeaderLayoutData to display a visual separator.
		 * @return 
		 */
		getActions(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>breadCrumbsLinks</code>.
		 * 
		 * A list of all the active link elements in the BreadCrumbs control.
		 * @return 
		 */
		getBreadCrumbsLinks(): sap.m.Link[];
		/**
		 * Gets current value of property <code>isActionAreaAlwaysVisible</code>.
		 * 
		 * Determines whether the action buttons should always be visible or visible only when the header is snapped.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>isActionAreaAlwaysVisible</code>
		 */
		getIsActionAreaAlwaysVisible(): boolean;
		/**
		 * Gets current value of property <code>isObjectIconAlwaysVisible</code>.
		 * 
		 * Determines whether the icon should always be visible or visible only when the header is snapped.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>isObjectIconAlwaysVisible</code>
		 */
		getIsObjectIconAlwaysVisible(): boolean;
		/**
		 * Gets current value of property <code>isObjectSubtitleAlwaysVisible</code>.
		 * 
		 * Determines whether the subtitle should always be visible or visible only when the header is snapped.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>isObjectSubtitleAlwaysVisible</code>
		 */
		getIsObjectSubtitleAlwaysVisible(): boolean;
		/**
		 * Gets current value of property <code>isObjectTitleAlwaysVisible</code>.
		 * 
		 * Determines whether the title should always be visible or visible only when the header is snapped.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>isObjectTitleAlwaysVisible</code>
		 */
		getIsObjectTitleAlwaysVisible(): boolean;
		/**
		 * Gets current value of property <code>markChanges</code>.
		 * 
		 * Marks that there are unsaved changes in the objectPageHeader.
		 * The markChanges state cannot be used together with the markLocked state.
		 * If both are set to true, only the locked state will be displayed.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>markChanges</code>
		 */
		getMarkChanges(): boolean;
		/**
		 * Gets current value of property <code>markFavorite</code>.
		 * 
		 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>markFavorite</code>
		 */
		getMarkFavorite(): boolean;
		/**
		 * Gets current value of property <code>markFlagged</code>.
		 * 
		 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>markFlagged</code>
		 */
		getMarkFlagged(): boolean;
		/**
		 * Gets current value of property <code>markLocked</code>.
		 * 
		 * Set the locked state of the objectPageHeader.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>markLocked</code>
		 */
		getMarkLocked(): boolean;
		/**
		 * Gets content of aggregation <code>navigationBar</code>.
		 * 
		 * An instance of sap.m.Bar to be embedded in the header
		 * @return 
		 */
		getNavigationBar(): sap.m.Bar;
		/**
		 * Gets current value of property <code>objectImageAlt</code>.
		 * 
		 * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>objectImageAlt</code>
		 */
		getObjectImageAlt(): string;
		/**
		 * Gets current value of property <code>objectImageDensityAware</code>.
		 * 
		 * The value of densityAware for the image, supplied via the objectImageURI property.
		 * See sap.m.Image for more details on densityAware.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>objectImageDensityAware</code>
		 */
		getObjectImageDensityAware(): boolean;
		/**
		 * Gets current value of property <code>objectImageShape</code>.
		 * 
		 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
		 * 
		 * Default value is <code>Square</code>.
		 * @return Value of property <code>objectImageShape</code>
		 */
		getObjectImageShape(): ObjectPageHeaderPictureShape;
		/**
		 * Gets current value of property <code>objectImageURI</code>.
		 * 
		 * The URL of the image, representing the business object
		 * @return Value of property <code>objectImageURI</code>
		 */
		getObjectImageURI(): string;
		/**
		 * Gets current value of property <code>objectSubtitle</code>.
		 * 
		 * The description of the object
		 * @return Value of property <code>objectSubtitle</code>
		 */
		getObjectSubtitle(): string;
		/**
		 * Gets current value of property <code>objectTitle</code>.
		 * 
		 * The title of the object
		 * @return Value of property <code>objectTitle</code>
		 */
		getObjectTitle(): string;
		/**
		 * Gets current value of property <code>showMarkers</code>.
		 * 
		 * Indicates if object page header title supports showing markers such as flagged and favorite.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showMarkers</code>
		 */
		getShowMarkers(): boolean;
		/**
		 * Gets current value of property <code>showPlaceholder</code>.
		 * 
		 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showPlaceholder</code>
		 */
		getShowPlaceholder(): boolean;
		/**
		 * Gets current value of property <code>showTitleSelector</code>.
		 * 
		 * When set to true, the selector arrow icon/image is shown and can be pressed.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showTitleSelector</code>
		 */
		getShowTitleSelector(): boolean;
		/**
		 * Gets content of aggregation <code>sideContentButton</code>.
		 * 
		 * A button that is used for opening the side content of the page or some additional content.
		 * @return 
		 */
		getSideContentButton(): sap.m.Button;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>actions</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oAction The action whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfAction(oAction: sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.m.Link</code> in the aggregation <code>breadCrumbsLinks</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oBreadCrumbLink The breadCrumbLink whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfBreadCrumbLink(oBreadCrumbLink: sap.m.Link): number;
		/**
		 * Inserts a action into the aggregation <code>actions</code>.
		 * @param oAction the action to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the action should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the action is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertAction(oAction: sap.ui.core.Control, iIndex: number): ObjectPageHeader;
		/**
		 * Inserts a breadCrumbLink into the aggregation <code>breadCrumbsLinks</code>.
		 * @param oBreadCrumbLink the breadCrumbLink to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the breadCrumbLink should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the breadCrumbLink is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the breadCrumbLink is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertBreadCrumbLink(oBreadCrumbLink: sap.m.Link, iIndex: number): ObjectPageHeader;
		/**
		 * Removes a action from the aggregation <code>actions</code>.
		 * @param vAction The action to remove or its index or id
		 * @return The removed action or <code>null</code>
		 */
		removeAction(vAction: number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes all the controls from the aggregation <code>actions</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllActions(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>breadCrumbsLinks</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllBreadCrumbsLinks(): sap.m.Link[];
		/**
		 * Removes a breadCrumbLink from the aggregation <code>breadCrumbsLinks</code>.
		 * @param vBreadCrumbLink The breadCrumbLink to remove or its index or id
		 * @return The removed breadCrumbLink or <code>null</code>
		 */
		removeBreadCrumbLink(vBreadCrumbLink: number|string|sap.m.Link): sap.m.Link;
		/**
		 * Sets a new value for property <code>isActionAreaAlwaysVisible</code>.
		 * 
		 * Determines whether the action buttons should always be visible or visible only when the header is snapped.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIsActionAreaAlwaysVisible New value for property <code>isActionAreaAlwaysVisible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setIsActionAreaAlwaysVisible(bIsActionAreaAlwaysVisible: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>isObjectIconAlwaysVisible</code>.
		 * 
		 * Determines whether the icon should always be visible or visible only when the header is snapped.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bIsObjectIconAlwaysVisible New value for property <code>isObjectIconAlwaysVisible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setIsObjectIconAlwaysVisible(bIsObjectIconAlwaysVisible: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>isObjectSubtitleAlwaysVisible</code>.
		 * 
		 * Determines whether the subtitle should always be visible or visible only when the header is snapped.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIsObjectSubtitleAlwaysVisible New value for property <code>isObjectSubtitleAlwaysVisible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setIsObjectSubtitleAlwaysVisible(bIsObjectSubtitleAlwaysVisible: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>isObjectTitleAlwaysVisible</code>.
		 * 
		 * Determines whether the title should always be visible or visible only when the header is snapped.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIsObjectTitleAlwaysVisible New value for property <code>isObjectTitleAlwaysVisible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setIsObjectTitleAlwaysVisible(bIsObjectTitleAlwaysVisible: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>markChanges</code>.
		 * 
		 * Marks that there are unsaved changes in the objectPageHeader.
		 * The markChanges state cannot be used together with the markLocked state.
		 * If both are set to true, only the locked state will be displayed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bMarkChanges New value for property <code>markChanges</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setMarkChanges(bMarkChanges: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>markFavorite</code>.
		 * 
		 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bMarkFavorite New value for property <code>markFavorite</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setMarkFavorite(bMarkFavorite: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>markFlagged</code>.
		 * 
		 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bMarkFlagged New value for property <code>markFlagged</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setMarkFlagged(bMarkFlagged: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>markLocked</code>.
		 * 
		 * Set the locked state of the objectPageHeader.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bMarkLocked New value for property <code>markLocked</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setMarkLocked(bMarkLocked: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>objectImageAlt</code>.
		 * 
		 * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sObjectImageAlt New value for property <code>objectImageAlt</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setObjectImageAlt(sObjectImageAlt: string): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>objectImageDensityAware</code>.
		 * 
		 * The value of densityAware for the image, supplied via the objectImageURI property.
		 * See sap.m.Image for more details on densityAware.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bObjectImageDensityAware New value for property <code>objectImageDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setObjectImageDensityAware(bObjectImageDensityAware: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>objectImageShape</code>.
		 * 
		 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Square</code>.
		 * @param sObjectImageShape New value for property <code>objectImageShape</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setObjectImageShape(sObjectImageShape: ObjectPageHeaderPictureShape): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>objectImageURI</code>.
		 * 
		 * The URL of the image, representing the business object
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sObjectImageURI New value for property <code>objectImageURI</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setObjectImageURI(sObjectImageURI: string): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>objectSubtitle</code>.
		 * 
		 * The description of the object
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sObjectSubtitle New value for property <code>objectSubtitle</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setObjectSubtitle(sObjectSubtitle: string): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>showMarkers</code>.
		 * 
		 * Indicates if object page header title supports showing markers such as flagged and favorite.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowMarkers New value for property <code>showMarkers</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowMarkers(bShowMarkers: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>showPlaceholder</code>.
		 * 
		 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowPlaceholder New value for property <code>showPlaceholder</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowPlaceholder(bShowPlaceholder: boolean): ObjectPageHeader;
		/**
		 * Sets a new value for property <code>showTitleSelector</code>.
		 * 
		 * When set to true, the selector arrow icon/image is shown and can be pressed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowTitleSelector New value for property <code>showTitleSelector</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowTitleSelector(bShowTitleSelector: boolean): ObjectPageHeader;
		/**
		 * Sets the aggregated <code>sideContentButton</code>.
		 * @param oSideContentButton The sideContentButton to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setSideContentButton(oSideContentButton: sap.m.Button): ObjectPageHeader;
	}

	class ObjectPageHeaderActionButton extends sap.m.Button {
		/**
		 * Constructor for a new ObjectPageHeaderActionButton.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageHeaderActionButtonMetadata);
		/**
		 * Constructor for a new ObjectPageHeaderActionButton.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Button.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageHeaderActionButtonMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.m.Button with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @note Overload from base type sap.m.Button
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.m.ButtonMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets current value of property <code>hideIcon</code>.
		 * 
		 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
		 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>hideIcon</code>
		 */
		getHideIcon(): boolean;
		/**
		 * Gets current value of property <code>hideText</code>.
		 * 
		 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
		 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>hideText</code>
		 */
		getHideText(): boolean;
		/**
		 * Gets current value of property <code>importance</code>.
		 * 
		 * Determines the order in which the button overflows.
		 * 
		 * Default value is <code>library.Importance.High</code>.
		 * @return Value of property <code>importance</code>
		 */
		getImportance(): Importance;
		/**
		 * Sets a new value for property <code>hideIcon</code>.
		 * 
		 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
		 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bHideIcon New value for property <code>hideIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setHideIcon(bHideIcon: boolean): ObjectPageHeaderActionButton;
		/**
		 * Sets a new value for property <code>hideText</code>.
		 * 
		 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
		 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bHideText New value for property <code>hideText</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setHideText(bHideText: boolean): ObjectPageHeaderActionButton;
		/**
		 * Sets a new value for property <code>importance</code>.
		 * 
		 * Determines the order in which the button overflows.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>library.Importance.High</code>.
		 * @param sImportance New value for property <code>importance</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setImportance(sImportance: Importance): ObjectPageHeaderActionButton;
	}

	class ObjectPageHeaderContent extends sap.ui.core.Control {
		/**
		 * Constructor for a new ObjectPageHeaderContent.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageHeaderContentMetadata);
		/**
		 * Constructor for a new ObjectPageHeaderContent.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addContent(oContent: sap.ui.core.Control): ObjectPageHeaderContent;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyContent(): ObjectPageHeaderContent;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageHeaderContentMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * The list of Objects of type sap.ui.core.Control.
		 * @return 
		 */
		getContent(): sap.ui.core.Control[];
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfContent(oContent: sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertContent(oContent: sap.ui.core.Control, iIndex: number): ObjectPageHeaderContent;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		removeContent(vContent: number|string|sap.ui.core.Control): sap.ui.core.Control;
	}

	class ObjectPageHeaderDesign {
		/**
		 * Dark theme for the ObjectPageHeader.
		 */
		static Dark: string;
		/**
		 * Light theme for the ObjectPageHeader.
		 */
		static Light: string;
	}

	class ObjectPageHeaderLayoutData extends sap.ui.core.LayoutData {
		/**
		 * Constructor for a new ObjectPageHeaderLayoutData.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageHeaderLayoutDataMetadata);
		/**
		 * Constructor for a new ObjectPageHeaderLayoutData.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageHeaderLayoutDataMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Gets current value of property <code>showSeparatorAfter</code>.
		 * 
		 * If this property is set the control will display a separator after it.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showSeparatorAfter</code>
		 */
		getShowSeparatorAfter(): boolean;
		/**
		 * Gets current value of property <code>showSeparatorBefore</code>.
		 * 
		 * If this property is set the control will display a separator before it.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showSeparatorBefore</code>
		 */
		getShowSeparatorBefore(): boolean;
		/**
		 * Gets current value of property <code>visibleL</code>.
		 * 
		 * If this property is set the control will be visible (or not) in a large sized layout.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visibleL</code>
		 */
		getVisibleL(): boolean;
		/**
		 * Gets current value of property <code>visibleM</code>.
		 * 
		 * If this property is set the control will be visible (or not) in a medium sized layout.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visibleM</code>
		 */
		getVisibleM(): boolean;
		/**
		 * Gets current value of property <code>visibleS</code>.
		 * 
		 * If this property is set the control will be visible (or not) in a small sized layout.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visibleS</code>
		 */
		getVisibleS(): boolean;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * If this property is set the control will take the provided size.
		 * 
		 * Default value is <code>auto</code>.
		 * @return Value of property <code>width</code>
		 */
		getWidth(): sap.ui.core.CSSSize;
		/**
		 * Sets a new value for property <code>showSeparatorAfter</code>.
		 * 
		 * If this property is set the control will display a separator after it.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowSeparatorAfter New value for property <code>showSeparatorAfter</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowSeparatorAfter(bShowSeparatorAfter: boolean): ObjectPageHeaderLayoutData;
		/**
		 * Sets a new value for property <code>showSeparatorBefore</code>.
		 * 
		 * If this property is set the control will display a separator before it.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowSeparatorBefore New value for property <code>showSeparatorBefore</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowSeparatorBefore(bShowSeparatorBefore: boolean): ObjectPageHeaderLayoutData;
		/**
		 * Sets a new value for property <code>visibleL</code>.
		 * 
		 * If this property is set the control will be visible (or not) in a large sized layout.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisibleL New value for property <code>visibleL</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setVisibleL(bVisibleL: boolean): ObjectPageHeaderLayoutData;
		/**
		 * Sets a new value for property <code>visibleM</code>.
		 * 
		 * If this property is set the control will be visible (or not) in a medium sized layout.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisibleM New value for property <code>visibleM</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setVisibleM(bVisibleM: boolean): ObjectPageHeaderLayoutData;
		/**
		 * Sets a new value for property <code>visibleS</code>.
		 * 
		 * If this property is set the control will be visible (or not) in a small sized layout.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisibleS New value for property <code>visibleS</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setVisibleS(bVisibleS: boolean): ObjectPageHeaderLayoutData;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * If this property is set the control will take the provided size.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>auto</code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setWidth(sWidth: sap.ui.core.CSSSize): ObjectPageHeaderLayoutData;
	}

	class ObjectPageHeaderPictureShape {
		/**
		 * Circle shape for the images in the ObjectPageHeader.
		 */
		static Circle: string;
		/**
		 * Square shape for the images in the ObjectPageHeader.
		 */
		static Square: string;
	}

	class ObjectPageLayout extends sap.ui.core.Control {
		/**
		 * Constructor for a new ObjectPageLayout.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageLayoutMetadata);
		/**
		 * Constructor for a new ObjectPageLayout.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some headerContent to the aggregation <code>headerContent</code>.
		 * @param oHeaderContent the headerContent to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addHeaderContent(oHeaderContent: sap.ui.core.Control): ObjectPageLayout;
		/**
		 * Adds some section to the aggregation <code>sections</code>.
		 * @param oSection the section to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addSection(oSection: ObjectPageSection): ObjectPageLayout;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>editHeaderButtonPress</code> event of this <code>sap.uxap.ObjectPageLayout</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
		 * 
		 * The event is fired when the Edit Header button is pressed
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param fnFunction The function to be called when the event occurs
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		attachEditHeaderButtonPress(oData: any, fnFunction: any, oListener?: any): ObjectPageLayout;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>navigate</code> event of this <code>sap.uxap.ObjectPageLayout</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
		 * 
		 * The event is fired when the selected section is changed using the navigation.
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param fnFunction The function to be called when the event occurs
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		attachNavigate(oData: any, fnFunction: any, oListener?: any): ObjectPageLayout;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>toggleAnchorBar</code> event of this <code>sap.uxap.ObjectPageLayout</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
		 * 
		 * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param fnFunction The function to be called when the event occurs
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		attachToggleAnchorBar(oData: any, fnFunction: any, oListener?: any): ObjectPageLayout;
		/**
		 * Destroys the footer in the aggregation <code>footer</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyFooter(): ObjectPageLayout;
		/**
		 * Destroys all the headerContent in the aggregation <code>headerContent</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyHeaderContent(): ObjectPageLayout;
		/**
		 * Destroys the headerTitle in the aggregation <code>headerTitle</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyHeaderTitle(): ObjectPageLayout;
		/**
		 * Destroys all the sections in the aggregation <code>sections</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroySections(): ObjectPageLayout;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>editHeaderButtonPress</code> event of this <code>sap.uxap.ObjectPageLayout</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		detachEditHeaderButtonPress(fnFunction: any, oListener: any): ObjectPageLayout;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>navigate</code> event of this <code>sap.uxap.ObjectPageLayout</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		detachNavigate(fnFunction: any, oListener: any): ObjectPageLayout;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>toggleAnchorBar</code> event of this <code>sap.uxap.ObjectPageLayout</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		detachToggleAnchorBar(fnFunction: any, oListener: any): ObjectPageLayout;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageLayout with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageLayoutMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Fires event <code>editHeaderButtonPress</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		fireEditHeaderButtonPress(mArguments?: any): ObjectPageLayout;
		/**
		 * Fires event <code>navigate</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>section</code> of type <code>sap.uxap.ObjectPageSection</code>The selected section object.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		fireNavigate(mArguments?: any): ObjectPageLayout;
		/**
		 * Fires event <code>toggleAnchorBar</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>fixed</code> of type <code>boolean</code>False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event(optional)
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		fireToggleAnchorBar(mArguments?: any): ObjectPageLayout;
		/**
		 * Gets current value of property <code>alwaysShowContentHeader</code>.
		 * 
		 * Determines whether Header Content will always be expanded on desktop.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>alwaysShowContentHeader</code>
		 */
		getAlwaysShowContentHeader(): boolean;
		/**
		 * Gets current value of property <code>enableLazyLoading</code>.
		 * 
		 * Enable lazy loading for the Object page Subsections.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>enableLazyLoading</code>
		 */
		getEnableLazyLoading(): boolean;
		/**
		 * Gets current value of property <code>flexEnabled</code>.
		 * 
		 * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br>
		 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>flexEnabled</code>
		 */
		getFlexEnabled(): boolean;
		/**
		 * Gets content of aggregation <code>footer</code>.
		 * 
		 * Object page floating footer.
		 * @return 
		 */
		getFooter(): sap.m.IBar;
		/**
		 * Gets content of aggregation <code>headerTitle</code>.
		 * 
		 * Object page header title - the upper, always static, part of the Object page header.
		 * @return 
		 */
		getHeaderTitle(): ObjectPageHeader;
		/**
		 * Gets current value of property <code>height</code>.
		 * 
		 * Determines the height of the ObjectPage.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>height</code>
		 */
		getHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>isChildPage</code>.
		 * 
		 * Determines whether the page is a child page and renders it with a different design.
		 * Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>isChildPage</code>
		 */
		getIsChildPage(): boolean;
		/**
		 * Returns a sap.ui.core.delegate.ScrollEnablement object used to handle scrolling
		 * @return 
		 */
		getScrollDelegate(): any;
		/**
		 * Returns the UI5 ID of the Section that is currently being scrolled.
		 * @return 
		 */
		getScrollingSectionId(): string;
		/**
		 * Gets content of aggregation <code>sections</code>.
		 * 
		 * The sections that make up the Object page content area.
		 * @return 
		 */
		getSections(): ObjectPageSection[];
		/**
		 * Gets current value of property <code>showAnchorBar</code>.
		 * 
		 * Determines whether the Navigation bar (Anchor bar) is displayed.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showAnchorBar</code>
		 */
		getShowAnchorBar(): boolean;
		/**
		 * Gets current value of property <code>showAnchorBarPopover</code>.
		 * 
		 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showAnchorBarPopover</code>
		 */
		getShowAnchorBarPopover(): boolean;
		/**
		 * Gets current value of property <code>showEditHeaderButton</code>.
		 * 
		 * Determines whether an Edit button will be shown in Header Content.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showEditHeaderButton</code>
		 */
		getShowEditHeaderButton(): boolean;
		/**
		 * Gets current value of property <code>showFooter</code>.
		 * 
		 * Determines whether the footer is visible.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showFooter</code>
		 */
		getShowFooter(): boolean;
		/**
		 * Gets current value of property <code>showHeaderContent</code>.
		 * 
		 * Determines the visibility of the Header content (headerContent aggregation).
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showHeaderContent</code>
		 */
		getShowHeaderContent(): boolean;
		/**
		 * Gets current value of property <code>showOnlyHighImportance</code>.
		 * 
		 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showOnlyHighImportance</code>
		 */
		getShowOnlyHighImportance(): boolean;
		/**
		 * Gets current value of property <code>showTitleInHeaderContent</code>.
		 * 
		 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showTitleInHeaderContent</code>
		 */
		getShowTitleInHeaderContent(): boolean;
		/**
		 * Gets current value of property <code>subSectionLayout</code>.
		 * 
		 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
		 * 
		 * Default value is <code>TitleOnTop</code>.
		 * @return Value of property <code>subSectionLayout</code>
		 */
		getSubSectionLayout(): ObjectPageSubSectionLayout;
		/**
		 * Gets current value of property <code>upperCaseAnchorBar</code>.
		 * 
		 * Determines whether the Anchor bar items are displayed in upper case.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>upperCaseAnchorBar</code>
		 */
		getUpperCaseAnchorBar(): boolean;
		/**
		 * Gets current value of property <code>useIconTabBar</code>.
		 * 
		 * Use sap.m.IconTabBar instead of the default Anchor bar
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>useIconTabBar</code>
		 */
		getUseIconTabBar(): boolean;
		/**
		 * Gets current value of property <code>useTwoColumnsForLargeScreen</code>.
		 * 
		 * Determines whether the to use two column layout for the L screen size.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>useTwoColumnsForLargeScreen</code>
		 */
		getUseTwoColumnsForLargeScreen(): boolean;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>headerContent</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oHeaderContent The headerContent whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfHeaderContent(oHeaderContent: sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation <code>sections</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oSection The section whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfSection(oSection: ObjectPageSection): number;
		/**
		 * Inserts a headerContent into the aggregation <code>headerContent</code>.
		 * @param oHeaderContent the headerContent to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the headerContent should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the headerContent is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertHeaderContent(oHeaderContent: sap.ui.core.Control, iIndex: number): ObjectPageLayout;
		/**
		 * Inserts a section into the aggregation <code>sections</code>.
		 * @param oSection the section to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the section should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the section is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertSection(oSection: ObjectPageSection, iIndex: number): ObjectPageLayout;
		/**
		 * Removes all the controls from the aggregation <code>headerContent</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllHeaderContent(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>sections</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllSections(): ObjectPageSection[];
		/**
		 * Removes a headerContent from the aggregation <code>headerContent</code>.
		 * @param vHeaderContent The headerContent to remove or its index or id
		 * @return The removed headerContent or <code>null</code>
		 */
		removeHeaderContent(vHeaderContent: number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a section from the aggregation <code>sections</code>.
		 * @param vSection The section to remove or its index or id
		 * @return The removed section or <code>null</code>
		 */
		removeSection(vSection: number|string|ObjectPageSection): ObjectPageSection;
		/**
		 * Scrolls the Object page to the given Section.
		 * @param sId The Section ID to scroll to
		 * @param iDuration Scroll duration (in ms). Default value is 0
		 * @param iOffset Additional pixels to scroll
		 */
		scrollToSection(sId: string, iDuration: number, iOffset: number);
		/**
		 * Sets a new value for property <code>alwaysShowContentHeader</code>.
		 * 
		 * Determines whether Header Content will always be expanded on desktop.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bAlwaysShowContentHeader New value for property <code>alwaysShowContentHeader</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setAlwaysShowContentHeader(bAlwaysShowContentHeader: boolean): ObjectPageLayout;
		/**
		 * Overwrite setBusy, because the busyIndicator does not cover the header title,
		 * because the header title has z-index: 2 in order to appear on top of the content
		 * @param bBusy 
		 */
		setBusy(bBusy: boolean);
		/**
		 * Set the controls busy state.
		 * @note Overload from base type sap.ui.core.Control
		 * @param bBusy The new busy state to be set
		 * @return <code>this</code> to allow method chaining
		 */
		setBusy(bBusy: boolean): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>enableLazyLoading</code>.
		 * 
		 * Enable lazy loading for the Object page Subsections.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bEnableLazyLoading New value for property <code>enableLazyLoading</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setEnableLazyLoading(bEnableLazyLoading: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>flexEnabled</code>.
		 * 
		 * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br>
		 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bFlexEnabled New value for property <code>flexEnabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setFlexEnabled(bFlexEnabled: boolean): ObjectPageLayout;
		/**
		 * Sets the aggregated <code>footer</code>.
		 * @param oFooter The footer to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setFooter(oFooter: sap.m.IBar): ObjectPageLayout;
		/**
		 * Sets the aggregated <code>headerTitle</code>.
		 * @param oHeaderTitle The headerTitle to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setHeaderTitle(oHeaderTitle: ObjectPageHeader): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>height</code>.
		 * 
		 * Determines the height of the ObjectPage.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sHeight New value for property <code>height</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setHeight(sHeight: sap.ui.core.CSSSize): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>isChildPage</code>.
		 * 
		 * Determines whether the page is a child page and renders it with a different design.
		 * Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bIsChildPage New value for property <code>isChildPage</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setIsChildPage(bIsChildPage: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>showAnchorBar</code>.
		 * 
		 * Determines whether the Navigation bar (Anchor bar) is displayed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowAnchorBar New value for property <code>showAnchorBar</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowAnchorBar(bShowAnchorBar: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>showAnchorBarPopover</code>.
		 * 
		 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowAnchorBarPopover New value for property <code>showAnchorBarPopover</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowAnchorBarPopover(bShowAnchorBarPopover: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>showEditHeaderButton</code>.
		 * 
		 * Determines whether an Edit button will be shown in Header Content.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowEditHeaderButton New value for property <code>showEditHeaderButton</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowEditHeaderButton(bShowEditHeaderButton: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>showFooter</code>.
		 * 
		 * Determines whether the footer is visible.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowFooter New value for property <code>showFooter</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowFooter(bShowFooter: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>showOnlyHighImportance</code>.
		 * 
		 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowOnlyHighImportance New value for property <code>showOnlyHighImportance</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowOnlyHighImportance(bShowOnlyHighImportance: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>showTitleInHeaderContent</code>.
		 * 
		 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowTitleInHeaderContent New value for property <code>showTitleInHeaderContent</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowTitleInHeaderContent(bShowTitleInHeaderContent: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>subSectionLayout</code>.
		 * 
		 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>TitleOnTop</code>.
		 * @param sSubSectionLayout New value for property <code>subSectionLayout</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setSubSectionLayout(sSubSectionLayout: ObjectPageSubSectionLayout): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>upperCaseAnchorBar</code>.
		 * 
		 * Determines whether the Anchor bar items are displayed in upper case.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bUpperCaseAnchorBar New value for property <code>upperCaseAnchorBar</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setUpperCaseAnchorBar(bUpperCaseAnchorBar: boolean): ObjectPageLayout;
		/**
		 * Sets a new value for property <code>useTwoColumnsForLargeScreen</code>.
		 * 
		 * Determines whether the to use two column layout for the L screen size.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bUseTwoColumnsForLargeScreen New value for property <code>useTwoColumnsForLargeScreen</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setUseTwoColumnsForLargeScreen(bUseTwoColumnsForLargeScreen: boolean): ObjectPageLayout;
	}

	class ObjectPageLazyLoader extends sap.ui.core.Control {
		/**
		 * Constructor for a new ObjectPageLazyLoader.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Constructor for a new ObjectPageLazyLoader.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId ID for the new control, generated automatically if no ID is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addContent(oContent: sap.ui.core.Control): ObjectPageLazyLoader;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyContent(): ObjectPageLazyLoader;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageLazyLoader with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * Controls to be displayed after this element is unstashed
		 * @return 
		 */
		getContent(): sap.ui.core.Control[];
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfContent(oContent: sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertContent(oContent: sap.ui.core.Control, iIndex: number): ObjectPageLazyLoader;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		removeContent(vContent: number|string|sap.ui.core.Control): sap.ui.core.Control;
	}

	class ObjectPageSection extends ObjectPageSectionBase {
		/**
		 * Constructor for a new ObjectPageSection.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageSectionMetadata);
		/**
		 * Constructor for a new ObjectPageSection.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some subSection to the aggregation <code>subSections</code>.
		 * @param oSubSection the subSection to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addSubSection(oSubSection: ObjectPageSubSection): ObjectPageSection;
		/**
		 * Destroys all the subSections in the aggregation <code>subSections</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroySubSections(): ObjectPageSection;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageSection with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageSectionMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @note Overload from base type sap.uxap.ObjectPageSectionBase
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageSectionBaseMetadata, FNMetaImpl?: any): any;
		/**
		 * ID of the element which is the current target of the association <code>selectedSubSection</code>, or <code>null</code>.
		 * @return 
		 */
		getSelectedSubSection(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>showTitle</code>.
		 * 
		 * Determines whether to display the Section title or not.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showTitle</code>
		 */
		getShowTitle(): boolean;
		/**
		 * Gets content of aggregation <code>subSections</code>.
		 * 
		 * The list of Subsections.
		 * @return 
		 */
		getSubSections(): ObjectPageSubSection[];
		/**
		 * Gets current value of property <code>titleUppercase</code>.
		 * 
		 * Determines whether the Section title is displayed in upper case.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>titleUppercase</code>
		 */
		getTitleUppercase(): boolean;
		/**
		 * Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation <code>subSections</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oSubSection The subSection whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfSubSection(oSubSection: ObjectPageSubSection): number;
		/**
		 * Inserts a subSection into the aggregation <code>subSections</code>.
		 * @param oSubSection the subSection to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the subSection should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the subSection is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertSubSection(oSubSection: ObjectPageSubSection, iIndex: number): ObjectPageSection;
		/**
		 * Removes all the controls from the aggregation <code>subSections</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllSubSections(): ObjectPageSubSection[];
		/**
		 * Removes a subSection from the aggregation <code>subSections</code>.
		 * @param vSubSection The subSection to remove or its index or id
		 * @return The removed subSection or <code>null</code>
		 */
		removeSubSection(vSubSection: number|string|ObjectPageSubSection): ObjectPageSubSection;
		/**
		 * Sets the associated <code>selectedSubSection</code>.
		 * @param oSelectedSubSection ID of an element which becomes the new target of this selectedSubSection association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setSelectedSubSection(oSelectedSubSection: sap.ui.core.ID|ObjectPageSubSection): ObjectPageSection;
		/**
		 * Sets a new value for property <code>showTitle</code>.
		 * 
		 * Determines whether to display the Section title or not.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowTitle New value for property <code>showTitle</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setShowTitle(bShowTitle: boolean): ObjectPageSection;
		/**
		 * Sets a new value for property <code>titleUppercase</code>.
		 * 
		 * Determines whether the Section title is displayed in upper case.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bTitleUppercase New value for property <code>titleUppercase</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setTitleUppercase(bTitleUppercase: boolean): ObjectPageSection;
	}

	class ObjectPageSectionBase extends sap.ui.core.Control {
		/**
		 * Constructor for a new ObjectPageSectionBase.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageSectionBaseMetadata);
		/**
		 * Constructor for a new ObjectPageSectionBase.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Explicitly ask to connect to the UI5 model tree
		 */
		connectToModels();
		/**
		 * Destroys the customAnchorBarButton in the aggregation <code>customAnchorBarButton</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyCustomAnchorBarButton(): ObjectPageSectionBase;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageSectionBaseMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets content of aggregation <code>customAnchorBarButton</code>.
		 * 
		 * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar.
		 * This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.
		 * 
		 * If you want to change some of the button properties, you would need to bind them to a model.
		 * @return 
		 */
		getCustomAnchorBarButton(): sap.m.Button;
		/**
		 * Gets current value of property <code>importance</code>.
		 * 
		 * Determines whether the section will be hidden on low resolutions.
		 * 
		 * Default value is <code>library.Importance.High</code>.
		 * @return Value of property <code>importance</code>
		 */
		getImportance(): Importance;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Section Title
		 * @return Value of property <code>title</code>
		 */
		getTitle(): string;
		/**
		 * Gets current value of property <code>visible</code>.
		 * 
		 * Invisible ObjectPageSectionBase are not rendered
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visible</code>
		 */
		getVisible(): boolean;
		/**
		 * Sets the aggregated <code>customAnchorBarButton</code>.
		 * @param oCustomAnchorBarButton The customAnchorBarButton to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setCustomAnchorBarButton(oCustomAnchorBarButton: sap.m.Button): ObjectPageSectionBase;
		/**
		 * Sets a new value for property <code>importance</code>.
		 * 
		 * Determines whether the section will be hidden on low resolutions.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>library.Importance.High</code>.
		 * @param sImportance New value for property <code>importance</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setImportance(sImportance: Importance): ObjectPageSectionBase;
		/**
		 * Sets a new value for property <code>title</code>.
		 * 
		 * Section Title
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sTitle New value for property <code>title</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setTitle(sTitle: string): ObjectPageSectionBase;
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Invisible ObjectPageSectionBase are not rendered
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setVisible(bVisible: boolean): ObjectPageSectionBase;
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead of the real control
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @note Overload from base type sap.ui.core.Control
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setVisible(bVisible: boolean): sap.ui.core.Control;
	}

	class ObjectPageSubSection extends ObjectPageSectionBase {
		/**
		 * Constructor for a new ObjectPageSubSection.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: sap.uxap.ObjectPageSubSectionMetadata);
		/**
		 * Constructor for a new ObjectPageSubSection.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @note Any overloads to support not documented metadata
		 * @param sId id for the new control, generated automatically if no id is given(optional)
		 * @param mSettings initial settings for the new control(optional)
		 */
		constructor(sId?: string, mSettings?: any);
		/**
		 * Adds some action to the aggregation <code>actions</code>.
		 * @param oAction the action to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addAction(oAction: sap.ui.core.Control): ObjectPageSubSection;
		/**
		 * Adds some block to the aggregation <code>blocks</code>.
		 * @param oBlock the block to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addBlock(oBlock: sap.ui.core.Control): ObjectPageSubSection;
		/**
		 * Adds some moreBlock to the aggregation <code>moreBlocks</code>.
		 * @param oMoreBlock the moreBlock to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		addMoreBlock(oMoreBlock: sap.ui.core.Control): ObjectPageSubSection;
		/**
		 * Destroys all the actions in the aggregation <code>actions</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyActions(): ObjectPageSubSection;
		/**
		 * Destroys all the blocks in the aggregation <code>blocks</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyBlocks(): ObjectPageSubSection;
		/**
		 * Destroys all the moreBlocks in the aggregation <code>moreBlocks</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		destroyMoreBlocks(): ObjectPageSubSection;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageSubSectionMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain three kinds of informations:
		 * <ul>
		 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
		 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
		 * and might contain the following information
		 * <ul>
		 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
		 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
		 * facade of the class</li>
		 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
		 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
		 * </ul>
		 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
		 * </li>
		 * 
		 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
		 * If no constructor function is given, the framework creates a default implementation that delegates all
		 * its arguments to the constructor function of the base class.
		 * </li>
		 * 
		 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
		 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
		 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
		 * make sense to use primitive values here other than to declare public constants.
		 * </li>
		 * 
		 * </ul>
		 * 
		 * The prototype object of the newly created class uses the same prototype as instances of the base class
		 * (prototype chaining).
		 * 
		 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
		 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
		 * itself.
		 * 
		 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
		 * can be specified. Instances of that class will be used to represent metadata for the newly created class
		 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
		 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
		 * @note Overload from base type sap.ui.base.Object
		 * @param sClassName name of the class to be created
		 * @param oClassInfo structured object with informations about the class(optional)
		 * @param FNMetaImpl constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.(optional)
		 * @return the created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @note Overload from base type sap.ui.core.Control
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|sap.ui.core.ControlMetadata, FNMetaImpl?: any): any;
		/**
		 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @note Overload from base type sap.uxap.ObjectPageSectionBase
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class(optional)
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>(optional)
		 * @return Created class / constructor function
		 */
		extend(sClassName: string, oClassInfo?: any|ObjectPageSectionBaseMetadata, FNMetaImpl?: any): any;
		/**
		 * Gets content of aggregation <code>actions</code>.
		 * 
		 * Actions available for this Subsection
		 * @return 
		 */
		getActions(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>blocks</code>.
		 * 
		 * Controls to be displayed in the subsection
		 * @return 
		 */
		getBlocks(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>mode</code>.
		 * 
		 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
		 * 
		 * Default value is <code>Collapsed</code>.
		 * @return Value of property <code>mode</code>
		 */
		getMode(): ObjectPageSubSectionMode;
		/**
		 * Gets content of aggregation <code>moreBlocks</code>.
		 * 
		 * Additional controls to display when the Show more / See all / (...) button is pressed
		 * @return 
		 */
		getMoreBlocks(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>titleUppercase</code>.
		 * 
		 * Determines whether the Subsection title is displayed in upper case.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>titleUppercase</code>
		 */
		getTitleUppercase(): boolean;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>actions</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oAction The action whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfAction(oAction: sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>blocks</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oBlock The block whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfBlock(oBlock: sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>moreBlocks</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oMoreBlock The moreBlock whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		indexOfMoreBlock(oMoreBlock: sap.ui.core.Control): number;
		/**
		 * Inserts a action into the aggregation <code>actions</code>.
		 * @param oAction the action to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the action should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the action is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertAction(oAction: sap.ui.core.Control, iIndex: number): ObjectPageSubSection;
		/**
		 * Inserts a block into the aggregation <code>blocks</code>.
		 * @param oBlock the block to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the block should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the block is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the block is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertBlock(oBlock: sap.ui.core.Control, iIndex: number): ObjectPageSubSection;
		/**
		 * Inserts a moreBlock into the aggregation <code>moreBlocks</code>.
		 * @param oMoreBlock the moreBlock to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the moreBlock should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the moreBlock is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the moreBlock is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		insertMoreBlock(oMoreBlock: sap.ui.core.Control, iIndex: number): ObjectPageSubSection;
		/**
		 * Removes a action from the aggregation <code>actions</code>.
		 * @param vAction The action to remove or its index or id
		 * @return The removed action or <code>null</code>
		 */
		removeAction(vAction: number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes all the controls from the aggregation <code>actions</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllActions(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>blocks</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllBlocks(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>moreBlocks</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		removeAllMoreBlocks(): sap.ui.core.Control[];
		/**
		 * Removes a block from the aggregation <code>blocks</code>.
		 * @param vBlock The block to remove or its index or id
		 * @return The removed block or <code>null</code>
		 */
		removeBlock(vBlock: number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a moreBlock from the aggregation <code>moreBlocks</code>.
		 * @param vMoreBlock The moreBlock to remove or its index or id
		 * @return The removed moreBlock or <code>null</code>
		 */
		removeMoreBlock(vMoreBlock: number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>mode</code>.
		 * 
		 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Collapsed</code>.
		 * @param sMode New value for property <code>mode</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setMode(sMode: ObjectPageSubSectionMode): ObjectPageSubSection;
		/**
		 * Sets a new value for property <code>titleUppercase</code>.
		 * 
		 * Determines whether the Subsection title is displayed in upper case.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bTitleUppercase New value for property <code>titleUppercase</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		setTitleUppercase(bTitleUppercase: boolean): ObjectPageSubSection;
	}

	class ObjectPageSubSectionLayout {
		/**
		 * TitleOnLeft: title and actions on the left, inside the block area.
		 */
		static TitleOnLeft: string;
		/**
		 * TitleOnTop: title and actions on top of the block area.
		 */
		static TitleOnTop: string;
	}

	class ObjectPageSubSectionMode {
		/**
		 * Collapsed mode of display of the ObjectPageLayout.
		 */
		static Collapsed: string;
		/**
		 * Expanded mode of displaying the ObjectPageLayout.
		 */
		static Expanded: string;
	}

	interface AnchorBarMetadata extends sap.m.ToolbarMetadata {
		/**
		 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
		 * @default true
		 */
		showPopover?: boolean;
		/**
		 * Determines whether the Anchor bar items are displayed in upper case.
		 * @default false
		 */
		upperCase?: boolean;
	}

	interface BlockBaseMetadata extends sap.ui.core.ControlMetadata {
		/**
		 * Determines the mode of the block.
		 * When block is used inside ObjectPage this mode is inherited my the SubSection.
		 * The mode of the block is changed when SubSection mode changes.
		 */
		mode?: string;
		/**
		 * Determines the visibility of the block.
		 * @default true
		 */
		visible?: boolean;
		/**
		 * Determines on how columns the layout will be rendered.
		 * Allowed values are integers from 1 to 4 and "auto".
		 * @default auto
		 */
		columnLayout?: sap.uxap.BlockBaseColumnLayout;
		/**
		 * Determines if the block should automatically adjust its inner forms.
		 * Allowed values are "BlockColumns" and "OneColumn" and "None".
		 * If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block.
		 * If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block.
		 * If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
		 * @default BlockColumns
		 */
		formAdjustment?: sap.uxap.BlockBaseFormAdjustment;
		/**
		 * Determines whether the show more button should be shown.
		 * @default false
		 */
		showSubSectionMore?: boolean;
	}

	interface BreadCrumbsMetadata extends sap.ui.core.ControlMetadata {
		/**
		 * Sets the visibility of the current/last element in the BreadCrumbs path.
		 * @default true
		 */
		showCurrentLocation?: boolean;
	}

	interface HierarchicalSelectMetadata extends sap.m.SelectMetadata {
		/**
		 * Determines whether the HierarchicalSelect items are displayed in upper case.
		 * @default false
		 */
		upperCase?: boolean;
	}

	interface ModelMappingMetadata {
		/**
		 * Determines the the external model name.
		 */
		externalModelName?: string;
		/**
		 * Determines the the internal model name.
		 * @default Model
		 */
		internalModelName?: string;
		/**
		 * Determines the the external path.
		 */
		externalPath?: string;
	}

	interface ObjectPageHeaderMetadata extends sap.ui.core.ControlMetadata {
		/**
		 * The URL of the image, representing the business object
		 */
		objectImageURI?: string;
		/**
		 * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
		 * @default 
		 */
		objectImageAlt?: string;
		/**
		 * The value of densityAware for the image, supplied via the objectImageURI property.
		 * See sap.m.Image for more details on densityAware.
		 * @default false
		 */
		objectImageDensityAware?: boolean;
		/**
		 * The title of the object
		 */
		objectTitle?: string;
		/**
		 * The description of the object
		 */
		objectSubtitle?: string;
		/**
		 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
		 * @default Square
		 */
		objectImageShape?: sap.uxap.ObjectPageHeaderPictureShape;
		/**
		 * Determines whether the icon should always be visible or visible only when the header is snapped.
		 * @default false
		 */
		isObjectIconAlwaysVisible?: boolean;
		/**
		 * Determines whether the title should always be visible or visible only when the header is snapped.
		 * @default true
		 */
		isObjectTitleAlwaysVisible?: boolean;
		/**
		 * Determines whether the subtitle should always be visible or visible only when the header is snapped.
		 * @default true
		 */
		isObjectSubtitleAlwaysVisible?: boolean;
		/**
		 * Determines whether the action buttons should always be visible or visible only when the header is snapped.
		 * @default true
		 */
		isActionAreaAlwaysVisible?: boolean;
		/**
		 * When set to true, the selector arrow icon/image is shown and can be pressed.
		 * @default false
		 */
		showTitleSelector?: boolean;
		/**
		 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
		 * @default false
		 */
		markFavorite?: boolean;
		/**
		 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
		 * @default false
		 */
		markFlagged?: boolean;
		/**
		 * Indicates if object page header title supports showing markers such as flagged and favorite.
		 * @default false
		 */
		showMarkers?: boolean;
		/**
		 * Set the locked state of the objectPageHeader.
		 * @default false
		 */
		markLocked?: boolean;
		/**
		 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
		 * @default false
		 */
		showPlaceholder?: boolean;
		/**
		 * Marks that there are unsaved changes in the objectPageHeader.
		 * The markChanges state cannot be used together with the markLocked state.
		 * If both are set to true, only the locked state will be displayed.
		 * @default false
		 */
		markChanges?: boolean;
		/**
		 * The event is fired when the objectPage header title selector (down-arrow) is pressed
		 * @param domRef DOM reference of the title item's icon to be used for positioning.
		 */
		titleSelectorPress?: (domRef: string) => void;
		/**
		 * The event is fired when the Locked button is pressed
		 * @param domRef DOM reference of the lock item's icon to be used for positioning.
		 */
		markLockedPress?: (domRef: string) => void;
		/**
		 * The event is fired when the unsaved changes button is pressed
		 * @param domRef DOM reference of the changed item's icon to be used for positioning.
		 */
		markChangesPress?: (domRef: string) => void;
	}

	interface ObjectPageHeaderActionButtonMetadata extends sap.m.ButtonMetadata {
		/**
		 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
		 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
		 * @default true
		 */
		hideText?: boolean;
		/**
		 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
		 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
		 * @default false
		 */
		hideIcon?: boolean;
		/**
		 * Determines the order in which the button overflows.
		 * @default library.Importance.High
		 */
		importance?: sap.uxap.Importance;
	}

	interface ObjectPageHeaderContentMetadata extends sap.ui.core.ControlMetadata {
	}

	interface ObjectPageHeaderLayoutDataMetadata {
		/**
		 * If this property is set the control will be visible (or not) in a small sized layout.
		 * @default true
		 */
		visibleS?: boolean;
		/**
		 * If this property is set the control will be visible (or not) in a medium sized layout.
		 * @default true
		 */
		visibleM?: boolean;
		/**
		 * If this property is set the control will be visible (or not) in a large sized layout.
		 * @default true
		 */
		visibleL?: boolean;
		/**
		 * If this property is set the control will display a separator before it.
		 * @default false
		 */
		showSeparatorBefore?: boolean;
		/**
		 * If this property is set the control will display a separator after it.
		 * @default false
		 */
		showSeparatorAfter?: boolean;
		/**
		 * If this property is set the control will take the provided size.
		 * @default auto
		 */
		width?: sap.ui.core.CSSSize;
	}

	interface ObjectPageLayoutMetadata extends sap.ui.core.ControlMetadata {
		/**
		 * Determines whether the Navigation bar (Anchor bar) is displayed.
		 * @default true
		 */
		showAnchorBar?: boolean;
		/**
		 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
		 * @default true
		 */
		showAnchorBarPopover?: boolean;
		/**
		 * Determines whether the Anchor bar items are displayed in upper case.
		 * @default true
		 */
		upperCaseAnchorBar?: boolean;
		/**
		 * Determines the height of the ObjectPage.
		 * @default 100%
		 */
		height?: sap.ui.core.CSSSize;
		/**
		 * Enable lazy loading for the Object page Subsections.
		 * @default false
		 */
		enableLazyLoading?: boolean;
		/**
		 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
		 * @default TitleOnTop
		 */
		subSectionLayout?: sap.uxap.ObjectPageSubSectionLayout;
		/**
		 * Use sap.m.IconTabBar instead of the default Anchor bar
		 * @default false
		 */
		useIconTabBar?: boolean;
		/**
		 * Determines the visibility of the Header content (headerContent aggregation).
		 * @default true
		 */
		showHeaderContent?: boolean;
		/**
		 * Determines whether the to use two column layout for the L screen size.
		 * @default false
		 */
		useTwoColumnsForLargeScreen?: boolean;
		/**
		 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
		 * @default false
		 */
		showTitleInHeaderContent?: boolean;
		/**
		 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
		 * @default false
		 */
		showOnlyHighImportance?: boolean;
		/**
		 * Determines whether the page is a child page and renders it with a different design.
		 * Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
		 * @default false
		 */
		isChildPage?: boolean;
		/**
		 * Determines whether Header Content will always be expanded on desktop.
		 * @default false
		 */
		alwaysShowContentHeader?: boolean;
		/**
		 * Determines whether an Edit button will be shown in Header Content.
		 * @default false
		 */
		showEditHeaderButton?: boolean;
		/**
		 * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br>
		 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
		 * @default false
		 */
		flexEnabled?: boolean;
		/**
		 * Determines whether the footer is visible.
		 * @default false
		 */
		showFooter?: boolean;
		/**
		 * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
		 * @param fixed False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header.
		 */
		toggleAnchorBar?: (fixed: boolean) => void;
		/**
		 * The event is fired when the Edit Header button is pressed
		 */
		editHeaderButtonPress?: () => void;
		/**
		 * The event is fired when the selected section is changed using the navigation.
		 * @param section The selected section object.
		 */
		navigate?: (section: sap.uxap.ObjectPageSection) => void;
	}

	interface ObjectPageSectionMetadata extends sap.uxap.ObjectPageSectionBaseMetadata {
		/**
		 * Determines whether to display the Section title or not.
		 * @default true
		 */
		showTitle?: boolean;
		/**
		 * Determines whether the Section title is displayed in upper case.
		 * @default true
		 */
		titleUppercase?: boolean;
	}

	interface ObjectPageSectionBaseMetadata extends sap.ui.core.ControlMetadata {
		/**
		 * Section Title
		 */
		title?: string;
		/**
		 * Invisible ObjectPageSectionBase are not rendered
		 * @default true
		 */
		visible?: boolean;
		/**
		 * Determines whether the section will be hidden on low resolutions.
		 * @default library.Importance.High
		 */
		importance?: sap.uxap.Importance;
	}

	interface ObjectPageSubSectionMetadata extends sap.uxap.ObjectPageSectionBaseMetadata {
		/**
		 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
		 * @default Collapsed
		 */
		mode?: sap.uxap.ObjectPageSubSectionMode;
		/**
		 * Determines whether the Subsection title is displayed in upper case.
		 * @default false
		 */
		titleUppercase?: boolean;
	}
	/**
	 * Used by the BlockBase control to define how many columns should it be assigned by the objectPageSubSection.
	 *     The allowed values can be auto (subsection assigned a number of columns based on the parent objectPageLayout subsectionLayout property), 1, 2 or 3
	 *     (This may not be a valid value for some subSectionLayout, for example asking for 3 columns in a 2 column layout would raise warnings).
	 */
	type BlockBaseColumnLayout = string|number;
}
