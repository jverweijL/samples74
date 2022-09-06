<#if (JournalArticle_publishDate.getData())??>
	<#attempt>
  		<#assign publishDate = JournalArticle_publishDate.getData()?datetime["EEE MMM dd HH:mm:ss zzz yyyy"]>
		${publishDate?string["dd"]}
	<#recover>
		<#assign publishDate = JournalArticle_publishDate.getData()?datetime["yyyy-MM-dd HH:mm:ms"]>
		${publishDate?string["dd"]}
	</#attempt>	
</#if>