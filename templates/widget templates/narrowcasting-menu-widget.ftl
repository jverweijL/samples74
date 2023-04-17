<#if entries?has_content>
	<#assign nextpage = "" />
	<#list entries as navigationEntry>
		<#assign firstpage = entries[0]/>
		<#assign nextpage = entries[0] />
		
		<#if navigationEntry?has_next >
			<#assign nextpage = entries[navigationEntry?counter] />
		<#else>
				<#assign nextpage = firstpage />
		</#if>
		
			
			<#if currentURL?starts_with(navigationEntry.getURL()) >
				<#break/>
		  </#if>
	</#list>
		<script>
			if (window.location.href.indexOf("p_l_mode=edit") < 0) {
   setTimeout(function () {
        window.location.replace("${nextpage.getURL()}");
    }, 5000);
			}
   </script>
		
		<style>
        body {
            animation: fadeInAnimation ease 3s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
			
</#if>