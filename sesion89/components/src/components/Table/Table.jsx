import React from "react";
import styles from '.Table.module.css'

const Table = ({render, data, columns, columnsRender}) => {
    return (
        <div className={styles.table}>
            <div className= {styles['table-column']}>
            {
                columns.map((columns) => columnsRender(column))
            }
            </div>
        {
            data.map((item)=> render(item))
        }
        </div>
    )
}
export default Table