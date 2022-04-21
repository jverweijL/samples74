<div class="card">
	<div class="card-body">
		<h5 class="card-title">
			<#if (title.getData())??>
				${title.getData()}
			</#if>
		</h5>
		<p class="card-text">
			<#if (description.getData())??>
				${description.getData()}
			</#if>
		</p>
		<a href="${downloadURL.getData()}" class="btn btn-primary">Download</a>
	</div>
</div>