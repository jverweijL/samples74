<#if (JournalArticle_publishDate.getData())??>
	<#assign publishDate = JournalArticle_publishDate.getData()?datetime["EEE MMM dd HH:mm:ss zzz yyyy"]>
	${publishDate?string["dd"]}
</#if>