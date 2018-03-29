<template>
  <div class="docs-demo-wrapper">
      <div :style="{maxHeight: isExpand ? '700px' : '0'}" class="demo-container">
        <div span="14">
          <div class="docs-demo docs-demo--expand">
            <div class="highlight-wrapper">
              <slot name="highlight"></slot>
            </div>
          </div>
        </div>
      </div>
    <span 
           class="docs-trans docs-demo__triangle" 
           @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
  </div>
</template>