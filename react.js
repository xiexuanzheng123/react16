/**
 * 使用替换而不是修改的好处：
 * 1 轻松实现撤销、重做和时间旅行，切换历史数据
 * 2 记录变化，返回了新对象就是发生了改变，不用跟原来的做比较，浪费操作
 * 3 何时根据数据的改变重新渲染组件，纯组件 pure component
 * 4 React专门为Square这样的只有render方法的组件提供了一种更简洁的定义组件的方法：函数自定义组件
 * 5 如果组件包含state数据，那么这些数据要按顺序排列，方便增删查改，
 *    当一个新的key值 被添加到当前列表时，表示有一个组件被创建，被删除时有一个组件被摧毁
 *    key值可以让React明确标识每个组件，这样它才能在每次重新渲染时保有对应的状态数据，
 * 
 * React DOM 在渲染之前默认会 过滤 所有传入的值。它可以确保你的应用不会被注入攻击。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS(跨站脚本) 攻击
 * ReactDOM确保浏览器DOM和reactdom保持一致
 * React元素都是immutable的
 * 所有的React组件必须像纯函数那样使用它们的props
 * 
 * 在多组件系统中，摧毁时要记得释放组件所占用的资源
 * componentDidMount生命周期钩子
 * 
 * 如果不在render中使用的东西，就不应该在状态中
 * setState()三件事需要知道：
 *  1 只能setState
 *  2 状态 更新可能异步，react可以将多个setState合并为一个调用来提高性能
 *  
 * react中的时间传入函数名，不可以使用return false来阻止默认行为，明确的使用preventDefault
 * 两种方法解决绑定问题
 1 * 属性初始化器
 2   箭头函数：箭头函数有个问题，每次渲染组件的时候都会创建一个不同的回调函数，如果这个回调函数作为属性传入下一个组件，
        这些组件可能会进行额外的重新渲染，通常建议在构造函数中绑定或使用属性初始化器

    使用bind函数传参，e要放在参数的最后面

    如果map嵌套层级很多 那就要考虑提取组件了

    受控组件

    建议使用组合而不是继承
    children属性 获取子元素

    子组件可以通过props.children将获取父元素传来的组件

    {showHeader && <Header />}添加渲染
    
    创建Refs，通过ref属性来获得React元素，
    当一个ref属性被传递给一个render函数中的元素时，可以使用ref中的current属性对节点的引用进行访问
    ref的值取决于节点的类型：
    1 当ref属性被用于一个普通的HTML元素时，React.createRef()将接受底层DOM元素作为他的current属性以创建ref
    2 当ref属性被用于自定义类的组件时候，ref对象将接受 该组件已挂载的实例作为它的current
    3 不能再函数式的组件上使用ref，以为它没有实例

    React会在组件加载时将DOM元素传入current属性，在卸载时改为null。
    ref的更新发生在componentDidMount或componentDidUpdate生命周期钩子之前
    函数式组建不可以使用ref
    从父组件访问子节点的DOM节点，不建议，组件实例不是DOM节点
    ref转发：Ref转发使组件可以像暴露自己的ref一样暴露子组件的ref，不推荐findDOMNode()
    回调Refs

    react在内部使用几种巧妙的技术来最小化DOM操作的数量，
    React在渲染出的UI内部建立和维护了一个内层的实现方式，它包括了从组件返回的React元素
    shouldComponentUpdate可以提升速度，它是在重新渲染过程开始前触发的

    React提供了一个辅助对象来实现浅比较的逻辑，继承自React.PureComponent
    大部分情况下，可以使用React.PureComponent而不必自己写shouldComponentUpdate
    Object.assign({}, prev, {});
    {...prev, key: value}
    getDefaultProps()
    getInialState()

    解决将一棵树转换为另一棵树的最小操作数算法问题的通用方案，树中元素个数为n，最先进的算法的时间复杂度为O(ne3)
    根节点不同，根节点下面所有的组件都会被卸载，状态也会被销毁
    如果key设置为索引，有时候会降低渲染速度
    Context通过组件提供了一个传递数据的方法，从而避免了通过每一级手动传递props的方式
    context设计的目的是为了共享那些被认为对于一个组件树来说是全局的属性
    Consumer接受一个函数作为子节点
    Object.is()比较对象

    React中一个常见模式是为一个组件返回多个元素，fragment可以让你聚合一个子元素列表，并且不在DOM中额外增加节点
 */