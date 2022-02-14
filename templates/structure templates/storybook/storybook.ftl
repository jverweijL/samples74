<#-- make sure to enable service locator!!! -->
<#assign 
	JournalArticleLocalService = serviceLocator.findService("com.liferay.journal.service.JournalArticleLocalService")
	ddmTemplateKey="95906"
/>


<section class="webstory-container container">
    <h2>${.vars['reserved-article-title'].data}</h2>
		
		<div>
		<#if (Intro.getData())??>
	${Intro.getData()}
</#if>
</div>

    <div id="webStoryControls" class="carousel slide carousel-fade p-5 border rounded shadow" data-ride="carousel" data-interval="false">
        <div class= "carousel-inner">

            <#if StorybookArticle.getSiblings()?has_content>
	<#list StorybookArticle.getSiblings() as journalArticle>
	
	<!-- begin carousel item -->
                    <#if journalArticle?counter == 1>
                        <div class="carousel-item active">
                    <#else>
                        <div class="carousel-item">
                    </#if>
										
										
                        <#assign
                            webContentData = jsonFactoryUtil.createJSONObject(journalArticle.getData())
                            articleUUID = webContentData.get("uuid")
                            article = JournalArticleLocalService.getJournalArticleByUuidAndGroupId(articleUUID,groupId)
                        />
                    
                    
	
		
		<div class="text-right">
                        <h4>(${journalArticle?counter} of ${StorybookArticle.getSiblings()?size})</h4>
                    </div>
										
										<@liferay_journal["journal-article"]
                        articleId=article.getArticleId()
                        ddmTemplateKey=ddmTemplateKey
                        groupId=groupId
                    />
		
		</div><!-- end carousel item -->
	</#list>
</#if>
            
        </div>
        <div class="clearfix">
            <div class="webstory-controls d-flex flex-row pt-5">
                <div class="flex-fill">
                    <button class="btn btn-outline-secondary" style="width: 150px" type="button" data-target="#webStoryControls" data-slide="prev">&lt; Previous</button>
                </div>
                <div class="flex-fill text-right">
                    <button class="btn btn-outline-secondary" style="width: 150px" type="button" data-target="#webStoryControls" data-slide="prev">Next &gt;</button>
                </div>
            </div>
        </div>
    </div>
</section>