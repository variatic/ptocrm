class DocumentsController {
  constructor() {
    this.name = 'documents';
    this.title = 'Документы';
    this.documents = [
      {
        date: Date.now(),
        type: 'hidden_act',
        title: 'Акт скрытых работ'
      },
      {
        date: Date.now(),
        type: 'hidden_act',
        title: 'Акт скрытых работ'
      },
      {
        date: Date.now(),
        type: 'hidden_act',
        title: 'Акт скрытых работ'
      }
    ];
  }

  $onInit() {
    console.log('Init');
  }

  $onChanges($change) {
    console.log('Change');
  }

  $onDestroy() {
    console.log('Destroy');
  }
}

export default DocumentsController;
