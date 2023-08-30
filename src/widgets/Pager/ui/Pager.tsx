// import cls from './Pager.module.scss'
// import { classNames } from 'shared/lib/classNames/classNames';
// import { Button, ThemeButton } from 'shared/ui/Button/Button';
//
// interface PagerProps {
//     className?: string;
//     options: {
//         totalItems: number;
//         itemsPerPage: number;
//         ordersCount: number;
//         currentPage: number;
//         setCurrentPage: void;
//         setFetching: void;
//     }
// }
//
// export const Pager = (props: PagerProps) => {
//     const {
//         options,
//         className,
//     } = props;
//
//     let totalPage =
//         options.totalItems % options.itemsPerPage === 0
//             ? options.totalOrders / options.ordersCount
//             : Math.ceil(options.totalItems / options.itemsPerPage);
//
//     const prevPage = () => {
//         options.currentPage > 0 && options.setCurrentPage((prevState) => prevState - 1);
//         options.currentPage > 0 && options.setFetching(true);
//     };
//     const nextPage = () => {
//         options.currentPage < totalPage && options.setCurrentPage((prevState) => prevState + 1);
//         options.currentPage < totalPage && options.setFetching(true);
//     };
//
//     const firstPage = () => {
//         options.setCurrentPage(0);
//         options.setFetching(true);
//     };
//
//     const lastPage = () => {
//         options.setCurrentPage(totalPage - 1);
//         options.setFetching(true);
//     };
//
//     const handleKeyDown = (event) => {
//         event.key === 'Enter' && options.setCurrentPage(options.refToPage.current.value - 1);
//         options.setFetching(true);
//     };
//
//     return (
//         <div className={cls.Pager}>
//             <div className={cls.btnGroup}>
//                 <Button
//                     onClick={firstPage}
//                     theme={ThemeButton.CLEAR}
//                     disabled={options.currentPage === 0 ? true : false}>
//                     &lt;&lt;
//                 </Button>
//                 <Button
//                     theme={ThemeButton.CLEAR}
//                     disabled={options.currentPage === 0 ? true : false}
//                     onClick={prevPage}>
//                     &lt;
//                 </Button>
//             </div>
//             <div>
//                 Страница{' '}
//                 <strong>
//                     {options.currentPage + 1} из {totalPage}
//                 </strong>
//             </div>
//             <div className="col-md-auto col">
//                 <input
//                     onKeyDown={options.handleKeyDown}
//                     ref={options.refToPage}
//                     min="1"
//                     type="number"
//                     className="form-control"
//                 />
//             </div>
//             <div className={cls.btnGroup}>
//                 <Button
//                     onClick={nextPage}
//                     theme={ThemeButton.CLEAR}
//                     disabled={options.currentPage >= totalPage - 1 ? true : false}>
//                     &gt;
//                 </Button>
//                 <Button
//                     theme={ThemeButton.CLEAR}
//                     disabled={options.currentPage >= totalPage - 1 ? true : false}
//                     onClick={lastPage}>
//                     &gt;&gt;
//                 </Button>
//             </div>
//         </div>
//     )
// }