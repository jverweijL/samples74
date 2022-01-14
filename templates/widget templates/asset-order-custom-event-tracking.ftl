<script>
function customevent(id, order) {
  console.log("ID: " + id + " order: " + order);
	Analytics.track("Asset Order",{
    'assetid': id.toString(),
    'order': order.toString()
	});
	console.log("custom event tracked");
}
</script>

<#if entries?has_content>
	<#list entries as curEntry>
		<a id="${curEntry.getEntryId()}" href="#" onclick="customevent('${curEntry.getEntryId()}',${curEntry?counter})">${curEntry.getTitle(locale)}</a> <br/>
	</#list>
</#if>