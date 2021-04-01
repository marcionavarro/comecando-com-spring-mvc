$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget);

	var codigoTitulo = button.data('codigo');
	var descricaoTitulo = button.data('descricao');

	var modal = $(this);
	var form = modal.find('form');
	var action = form.attr('action');
	if (!action.endsWith('/')) {
		action += '/';
		// Testar esse codgigo no console pois esta adicionando barras quando cancela a modal
	}

	form.attr('action', action + codigoTitulo);

	modal.find('.modal-body span').html('Tem Certeza que deseja excluir o título <strong>' + descricaoTitulo + '</strong>?');
});