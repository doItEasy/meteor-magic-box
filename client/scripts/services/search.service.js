import {Meteor} from 'meteor/meteor';
import { Service } from 'angular-ecmascript/module-helpers';

export default class SearchService extends Service {
  constructor() {
    super(...arguments);

    this.templateUrl = 'client/templates/modals/searchModal.html';
  }

  showModal() {
    this.scope = this.$rootScope.$new();

    this.$ionicModal.fromTemplateUrl(this.templateUrl, {
      scope: this.scope
    })
    .then((modal) => {
      this.modal = modal;
      this.modal.show();
    });
  }

  hideModal() {
    this.scope.$destroy();
    this.modal.remove();
  }
}

SearchService.$name = 'Search';
SearchService.$inject = ['$rootScope', '$ionicModal'];