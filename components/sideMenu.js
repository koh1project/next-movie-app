import Modal from "./modal";

const SideMenu = (props) => {
  const { categories } = props;
  return (
    <div>
      <Modal />
      <h1 className='my-4'>{props.appName}</h1>
      <div className='list-group'>
        {categories.map((c) => (
          <a key={c.id} href='#' className='list-group-item'>
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
