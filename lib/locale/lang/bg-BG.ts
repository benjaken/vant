export default {
  name: 'Име',
  tel: 'Телефон',
  save: 'Запазване',
  confirm: 'Потвърди',
  cancel: 'Отказ',
  delete: 'Изтриване',
  loading: 'Зареждане...',
  noCoupon: 'Без купони',
  nameEmpty: 'Моля, попълнете името',
  addContact: 'Добавяне на контакт',
  telInvalid: 'Неправилно формиран телефонен номер',
  vanCalendar: {
    end: 'Край',
    start: 'Старт',
    title: 'Календар',
    weekdays: [
      'неделя',
      'понеделник',
      'вторник',
      'сряда',
      'четвъртък',
      'петък',
      'събота',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Изберете не повече от ${maxRange} дни`,
  },
  vanCascader: {
    select: 'Избор',
  },
  vanPagination: {
    prev: 'Предишна',
    next: 'Напред',
  },
  vanPullRefresh: {
    pulling: 'Издърпайте за опресняване...',
    loosing: 'Разхлабен за опресняване...',
  },
  vanSubmitBar: {
    label: 'Общо:',
  },
  vanCoupon: {
    unlimited: 'Неограничен',
    discount: (discount: number) => `${discount * 10}% отстъпка`,
    condition: (condition: number) => `Поне ${condition}`,
  },
  vanCouponCell: {
    title: 'Купон',
    count: (count: number) => `Имате ${count} купони`,
  },
  vanCouponList: {
    exchange: 'Размяна',
    close: 'Затвори',
    enable: 'Налично',
    disabled: 'Недостъпно',
    placeholder: 'Код на купон',
  },
  vanAddressEdit: {
    area: 'Площ',
    postal: 'Пощенски',
    areaEmpty: 'Моля, изберете зона за получаване',
    addressEmpty: 'Адресът не може да бъде празен',
    postalEmpty: 'Грешен пощенски код',
    addressDetail: 'Адрес',
    defaultAddress: 'Задаване като адрес по подразбиране',
  },
  vanAddressList: {
    add: 'Добавяне на нов адрес',
  },
};
