"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2332],{"./packages/components/build-module/custom-select-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>custom_select_control});var X5LAA6JI=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/X5LAA6JI.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),select_label=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/select/select-label.js"),_2GXGCHW6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),react=__webpack_require__("./node_modules/react/index.js"),component=__webpack_require__("./packages/components/build-module/visually-hidden/component.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),select_select=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/select/select.js"),select_popover=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/select/select-popover.js"),select_item=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/select/select-item.js"),select_item_check=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/select/select-item-check.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js"),select_control_styles=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js"),input_control_styles=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js");const ANIMATION_PARAMS_SLIDE_AMOUNT="2px",ANIMATION_PARAMS_DURATION="400ms",ANIMATION_PARAMS_EASING="cubic-bezier( 0.16, 1, 0.3, 1 )",INLINE_PADDING={compact:config_values.A.controlPaddingXSmall,small:config_values.A.controlPaddingXSmall,default:config_values.A.controlPaddingX},Select=(0,emotion_styled_base_browser_esm.A)(select_select.l,{shouldForwardProp:prop=>"hasCustomRenderProp"!==prop,target:"e1p3eej77"})((({size,hasCustomRenderProp})=>(0,emotion_react_browser_esm.AH)("display:block;background-color:",colors_values.l.theme.background,";border:none;color:",colors_values.l.theme.foreground,";cursor:pointer;font-family:inherit;text-align:start;user-select:none;width:100%;&[data-focus-visible]{outline:none;}",((size,heightProperty)=>{const sizes={compact:{[heightProperty]:32,paddingInlineStart:INLINE_PADDING.compact,paddingInlineEnd:INLINE_PADDING.compact+select_control_styles.qO},default:{[heightProperty]:40,paddingInlineStart:INLINE_PADDING.default,paddingInlineEnd:INLINE_PADDING.default+select_control_styles.qO},small:{[heightProperty]:24,paddingInlineStart:INLINE_PADDING.small,paddingInlineEnd:INLINE_PADDING.small+select_control_styles.qO}};return sizes[size]||sizes.default})(size,hasCustomRenderProp?"minHeight":"height")," ",!hasCustomRenderProp&&truncateStyles," ",(0,input_control_styles.TA)({inputSize:size}),";","","","")),""),slideDownAndFade=(0,emotion_react_browser_esm.i7)({"0%":{opacity:0,transform:`translateY(-${ANIMATION_PARAMS_SLIDE_AMOUNT})`},"100%":{opacity:1,transform:"translateY(0)"}}),SelectPopover=(0,emotion_styled_base_browser_esm.A)(select_popover.k,{target:"e1p3eej76"})("display:flex;flex-direction:column;background-color:",colors_values.l.theme.background,";border-radius:",config_values.A.radiusSmall,";border:1px solid ",colors_values.l.theme.foreground,";box-shadow:",config_values.A.elevationMedium,";z-index:1000000;max-height:min( var( --popover-available-height, 400px ), 400px );overflow:auto;overscroll-behavior:contain;min-width:min-content;&[data-open]{@media not ( prefers-reduced-motion ){animation-duration:",ANIMATION_PARAMS_DURATION,";animation-timing-function:",ANIMATION_PARAMS_EASING,";animation-name:",slideDownAndFade,";will-change:transform,opacity;}}&[data-focus-visible]{outline:none;}"),SelectItem=(0,emotion_styled_base_browser_esm.A)(select_item.e,{target:"e1p3eej75"})((({size})=>(0,emotion_react_browser_esm.AH)("cursor:default;display:flex;align-items:center;justify-content:space-between;font-size:",config_values.A.fontSize,";line-height:28px;padding-block:",(0,space.x)(2),";scroll-margin:",(0,space.x)(1),";user-select:none;&[aria-disabled='true']{cursor:not-allowed;}&[data-active-item]{background-color:",colors_values.l.theme.gray[300],";}",(size=>{const sizes={compact:{paddingInlineStart:INLINE_PADDING.compact,paddingInlineEnd:INLINE_PADDING.compact-6},default:{paddingInlineStart:INLINE_PADDING.default,paddingInlineEnd:INLINE_PADDING.default-6},small:{paddingInlineStart:INLINE_PADDING.small,paddingInlineEnd:INLINE_PADDING.small-6}};return sizes[size]||sizes.default})(size),";","","","")),""),truncateStyles={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},SelectedExperimentalHintWrapper=(0,emotion_styled_base_browser_esm.A)("div",{target:"e1p3eej74"})(truncateStyles,";"),SelectedExperimentalHintItem=(0,emotion_styled_base_browser_esm.A)("span",{target:"e1p3eej73"})("color:",colors_values.l.theme.gray[600],";margin-inline-start:",(0,space.x)(2),";"),WithHintItemWrapper=(0,emotion_styled_base_browser_esm.A)("div",{target:"e1p3eej72"})("display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;flex:1;column-gap:",(0,space.x)(4),";"),WithHintItemHint=(0,emotion_styled_base_browser_esm.A)("span",{target:"e1p3eej71"})("color:",colors_values.l.theme.gray[600],";text-align:initial;line-height:",config_values.A.fontLineHeightBase,";padding-inline-end:",(0,space.x)(1),";margin-block:",(0,space.x)(1),";"),SelectedItemCheck=(0,emotion_styled_base_browser_esm.A)(select_item_check.u,{target:"e1p3eej70"})("display:flex;align-items:center;margin-inline-start:",(0,space.x)(2),";align-self:start;margin-block-start:2px;font-size:0;",WithHintItemWrapper,"~&,&:not(:empty){font-size:24px;}");var input_base=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),chevron_down=__webpack_require__("./packages/components/build-module/select-control/chevron-down.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomSelectContext=(0,react.createContext)(void 0);function defaultRenderSelectedValue(value){return(Array.isArray(value)?0===value.length:null==value)?(0,build_module.__)("Select an item"):Array.isArray(value)?1===value.length?value[0]:(0,build_module.nv)((0,build_module.__)("%s items selected"),value.length):value}const CustomSelectButton=({renderSelectedValue,size="default",store,...restProps})=>{const{value:currentValue}=(0,_2GXGCHW6.O$)(store),computedRenderSelectedValue=(0,react.useMemo)((()=>null!=renderSelectedValue?renderSelectedValue:defaultRenderSelectedValue),[renderSelectedValue]);return(0,jsx_runtime.jsx)(Select,{...restProps,size,hasCustomRenderProp:!!renderSelectedValue,store,children:computedRenderSelectedValue(currentValue)})};const custom_select=function _CustomSelect(props){const{children,hideLabelFromVision=!1,label,size,store,className,isLegacy=!1,...restProps}=props,onSelectPopoverKeyDown=(0,react.useCallback)((e=>{isLegacy&&e.stopPropagation()}),[isLegacy]),contextValue=(0,react.useMemo)((()=>({store,size})),[store,size]);return(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsx)(select_label.T,{store,render:hideLabelFromVision?(0,jsx_runtime.jsx)(component.A,{}):(0,jsx_runtime.jsx)(base_control.Ay.VisualLabel,{as:"div"}),children:label}),(0,jsx_runtime.jsxs)(input_base.A,{__next40pxDefaultSize:!0,size,suffix:(0,jsx_runtime.jsx)(chevron_down.A,{}),children:[(0,jsx_runtime.jsx)(CustomSelectButton,{...restProps,size,store,showOnKeyDown:!isLegacy}),(0,jsx_runtime.jsx)(SelectPopover,{gutter:12,store,sameWidth:!0,slide:!1,onKeyDown:onSelectPopoverKeyDown,flip:!isLegacy,children:(0,jsx_runtime.jsx)(CustomSelectContext.Provider,{value:contextValue,children})})]})]})};var icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js");function CustomSelectItem({children,...props}){var _customSelectContext$;const customSelectContext=(0,react.useContext)(CustomSelectContext);return(0,jsx_runtime.jsxs)(SelectItem,{store:customSelectContext?.store,size:null!==(_customSelectContext$=customSelectContext?.size)&&void 0!==_customSelectContext$?_customSelectContext$:"default",...props,children:[null!=children?children:props.value,(0,jsx_runtime.jsx)(SelectedItemCheck,{children:(0,jsx_runtime.jsx)(icon.A,{icon:check.A})})]})}CustomSelectItem.displayName="CustomSelectControlV2.Item";const item=CustomSelectItem;function applyOptionDeprecations({__experimentalHint,...rest}){return{hint:__experimentalHint,...rest}}function getDescribedBy(currentValue,describedBy){return describedBy||(0,build_module.nv)((0,build_module.__)("Currently selected: %s"),currentValue)}const custom_select_control=function CustomSelectControl(props){const{__next40pxDefaultSize=!1,describedBy,options,onChange,size="default",value,className:classNameProp,showSelectedHint=!1,...restProps}=function useDeprecatedProps({__experimentalShowSelectedHint,...otherProps}){return{showSelectedHint:__experimentalShowSelectedHint,...otherProps}}(props),descriptionId=(0,use_instance_id.A)(CustomSelectControl,"custom-select-control__description"),store=X5LAA6JI.n({async setValue(nextValue){const nextOption=options.find((item=>item.name===nextValue));if(!onChange||!nextOption)return;await Promise.resolve();const state=store.getState(),changeObject={highlightedIndex:state.renderedItems.findIndex((item=>item.value===nextValue)),inputValue:"",isOpen:state.open,selectedItem:nextOption,type:""};onChange(changeObject)},value:value?.name,defaultValue:options[0]?.name}),children=options.map(applyOptionDeprecations).map((({name,key,hint,style,className})=>{const withHint=(0,jsx_runtime.jsxs)(WithHintItemWrapper,{children:[(0,jsx_runtime.jsx)("span",{children:name}),(0,jsx_runtime.jsx)(WithHintItemHint,{className:"components-custom-select-control__item-hint",children:hint})]});return(0,jsx_runtime.jsx)(item,{value:name,children:hint?withHint:name,style,className:(0,clsx.A)(className,"components-custom-select-control__item",{"has-hint":hint})},key)})),{value:currentValue}=store.getState(),translatedSize=__next40pxDefaultSize&&"default"===size||"__unstable-large"===size?"default":__next40pxDefaultSize||"default"!==size?size:"compact";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(custom_select,{"aria-describedby":descriptionId,renderSelectedValue:showSelectedHint?()=>{const selectedOptionHint=options?.map(applyOptionDeprecations)?.find((({name})=>currentValue===name))?.hint;return(0,jsx_runtime.jsxs)(SelectedExperimentalHintWrapper,{children:[currentValue,selectedOptionHint&&(0,jsx_runtime.jsx)(SelectedExperimentalHintItem,{className:"components-custom-select-control__hint",children:selectedOptionHint})]})}:void 0,size:translatedSize,store,className:(0,clsx.A)("components-custom-select-control",classNameProp),isLegacy:!0,...restProps,children}),(0,jsx_runtime.jsx)(component.A,{children:(0,jsx_runtime.jsx)("span",{id:descriptionId,children:getDescribedBy(currentValue,describedBy)})})]})}}}]);