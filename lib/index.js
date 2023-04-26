import { ActionBar } from './action-bar';
import { ActionBarButton } from './action-bar-button';
import { ActionBarIcon } from './action-bar-icon';
import { ActionSheet } from './action-sheet';
import { AddressEdit } from './address-edit';
import { AddressList } from './address-list';
import { Area } from './area';
import { BackTop } from './back-top';
import { Badge } from './badge';
import { Button } from './button';
import { Calendar } from './calendar';
import { Card } from './card';
import { Cascader } from './cascader';
import { Cell } from './cell';
import { CellGroup } from './cell-group';
import { CheckButton } from './check-button';
import { Checkbox } from './checkbox';
import { CheckboxGroup } from './checkbox-group';
import { Circle } from './circle';
import { Col } from './col';
import { Collapse } from './collapse';
import { CollapseItem } from './collapse-item';
import { ConfigProvider } from './config-provider';
import { ContactCard } from './contact-card';
import { ContactEdit } from './contact-edit';
import { ContactList } from './contact-list';
import { CountDown } from './count-down';
import { Coupon } from './coupon';
import { CouponCell } from './coupon-cell';
import { CouponList } from './coupon-list';
import { DatePicker } from './date-picker';
import { Dialog } from './dialog';
import { Divider } from './divider';
import { DropdownItem } from './dropdown-item';
import { DropdownMenu } from './dropdown-menu';
import { Empty } from './empty';
import { Field } from './field';
import { Form } from './form';
import { Grid } from './grid';
import { GridItem } from './grid-item';
import { Icon } from './icon';
import { Image } from './image';
import { ImagePreview } from './image-preview';
import { IndexAnchor } from './index-anchor';
import { IndexBar } from './index-bar';
import { Lazyload } from './lazyload';
import { List } from './list';
import { Loading } from './loading';
import { Locale } from './locale';
import { NavBar } from './nav-bar';
import { NoticeBar } from './notice-bar';
import { Notify } from './notify';
import { NumberKeyboard } from './number-keyboard';
import { Overlay } from './overlay';
import { Pagination } from './pagination';
import { PasswordInput } from './password-input';
import { Picker } from './picker';
import { PickerGroup } from './picker-group';
import { Popover } from './popover';
import { Popup } from './popup';
import { Progress } from './progress';
import { PullRefresh } from './pull-refresh';
import { Radio } from './radio';
import { RadioGroup } from './radio-group';
import { Rate } from './rate';
import { Row } from './row';
import { Search } from './search';
import { ShareSheet } from './share-sheet';
import { Sidebar } from './sidebar';
import { SidebarItem } from './sidebar-item';
import { Skeleton } from './skeleton';
import { SkeletonAvatar } from './skeleton-avatar';
import { SkeletonImage } from './skeleton-image';
import { SkeletonParagraph } from './skeleton-paragraph';
import { SkeletonTitle } from './skeleton-title';
import { Slider } from './slider';
import { Space } from './space';
import { Step } from './step';
import { Stepper } from './stepper';
import { Steps } from './steps';
import { Sticky } from './sticky';
import { SubmitBar } from './submit-bar';
import { Swipe } from './swipe';
import { SwipeCell } from './swipe-cell';
import { SwipeItem } from './swipe-item';
import { Switch } from './switch';
import { Tab } from './tab';
import { Tabbar } from './tabbar';
import { TabbarItem } from './tabbar-item';
import { Tabs } from './tabs';
import { Tag } from './tag';
import { TextEllipsis } from './text-ellipsis';
import { TimePicker } from './time-picker';
import { Toast } from './toast';
import { TreeSelect } from './tree-select';
import { Uploader } from './uploader';
import { Watermark } from './watermark';

const version = '4.2.0';

function install(app) {
  const components = [
    ActionBar,
    ActionBarButton,
    ActionBarIcon,
    ActionSheet,
    AddressEdit,
    AddressList,
    Area,
    BackTop,
    Badge,
    Button,
    Calendar,
    Card,
    Cascader,
    Cell,
    CellGroup,
    CheckButton,
    Checkbox,
    CheckboxGroup,
    Circle,
    Col,
    Collapse,
    CollapseItem,
    ConfigProvider,
    ContactCard,
    ContactEdit,
    ContactList,
    CountDown,
    Coupon,
    CouponCell,
    CouponList,
    DatePicker,
    Dialog,
    Divider,
    DropdownItem,
    DropdownMenu,
    Empty,
    Field,
    Form,
    Grid,
    GridItem,
    Icon,
    Image,
    ImagePreview,
    IndexAnchor,
    IndexBar,
    List,
    Loading,
    Locale,
    NavBar,
    NoticeBar,
    Notify,
    NumberKeyboard,
    Overlay,
    Pagination,
    PasswordInput,
    Picker,
    PickerGroup,
    Popover,
    Popup,
    Progress,
    PullRefresh,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Search,
    ShareSheet,
    Sidebar,
    SidebarItem,
    Skeleton,
    SkeletonAvatar,
    SkeletonImage,
    SkeletonParagraph,
    SkeletonTitle,
    Slider,
    Space,
    Step,
    Stepper,
    Steps,
    Sticky,
    SubmitBar,
    Swipe,
    SwipeCell,
    SwipeItem,
    Switch,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Tag,
    TextEllipsis,
    TimePicker,
    Toast,
    TreeSelect,
    Uploader,
    Watermark
  ];

  components.forEach(item => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}


  export {
    install,
    version,
  };
  export * from './action-bar';
export * from './action-bar-button';
export * from './action-bar-icon';
export * from './action-sheet';
export * from './address-edit';
export * from './address-list';
export * from './area';
export * from './back-top';
export * from './badge';
export * from './button';
export * from './calendar';
export * from './card';
export * from './cascader';
export * from './cell';
export * from './cell-group';
export * from './check-button';
export * from './checkbox';
export * from './checkbox-group';
export * from './circle';
export * from './col';
export * from './collapse';
export * from './collapse-item';
export * from './config-provider';
export * from './contact-card';
export * from './contact-edit';
export * from './contact-list';
export * from './count-down';
export * from './coupon';
export * from './coupon-cell';
export * from './coupon-list';
export * from './date-picker';
export * from './dialog';
export * from './divider';
export * from './dropdown-item';
export * from './dropdown-menu';
export * from './empty';
export * from './field';
export * from './form';
export * from './grid';
export * from './grid-item';
export * from './icon';
export * from './image';
export * from './image-preview';
export * from './index-anchor';
export * from './index-bar';
export * from './lazyload';
export * from './list';
export * from './loading';
export * from './locale';
export * from './nav-bar';
export * from './notice-bar';
export * from './notify';
export * from './number-keyboard';
export * from './overlay';
export * from './pagination';
export * from './password-input';
export * from './picker';
export * from './picker-group';
export * from './popover';
export * from './popup';
export * from './progress';
export * from './pull-refresh';
export * from './radio';
export * from './radio-group';
export * from './rate';
export * from './row';
export * from './search';
export * from './share-sheet';
export * from './sidebar';
export * from './sidebar-item';
export * from './skeleton';
export * from './skeleton-avatar';
export * from './skeleton-image';
export * from './skeleton-paragraph';
export * from './skeleton-title';
export * from './slider';
export * from './space';
export * from './step';
export * from './stepper';
export * from './steps';
export * from './sticky';
export * from './submit-bar';
export * from './swipe';
export * from './swipe-cell';
export * from './swipe-item';
export * from './switch';
export * from './tab';
export * from './tabbar';
export * from './tabbar-item';
export * from './tabs';
export * from './tag';
export * from './text-ellipsis';
export * from './time-picker';
export * from './toast';
export * from './tree-select';
export * from './uploader';
export * from './watermark';


export default {
  install,
  version
};
