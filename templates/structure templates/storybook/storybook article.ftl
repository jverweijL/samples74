<h3>${.vars['reserved-article-title'].data}</h3>
<div class="storybook-image-wrapper">
    <#if (Image25268755.getData())?? && Image25268755.getData() != "">
		<img alt="${Image25268755.getAttribute("alt")}" data-fileentryid="${Image25268755.getAttribute("fileEntryId")}" src="${Image25268755.getData()}" />
	</#if>
  </div>



<div>
		<#if (RichText06958395.getData())??>
			${RichText06958395.getData()}
		</#if>
</div>

<style>
.storybook-image-wrapper {
  position: relative;
  padding-bottom: 42.8%;
}

.storybook-image-wrapper img {
  position: absolute;
  object-fit: cover;
	object-position: 50% 50%;
  width: 100%;
  height: 100%;
}
</style>