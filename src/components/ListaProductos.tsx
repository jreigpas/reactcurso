import React from "react";
import { Producto, Productos } from "../models/interfaces";
import ItemProducto from "./ItemProducto";

export const ListaProductos = ({ mProductos }: Productos) => {
  return (
    <div className="Budget-Overview">
      <table>
        <tbody>
          <tr className="Table-Header">
            <td>
              <h4>id producto</h4>
            </td>
            <td>
              <h4>nombre</h4>
            </td>
            <td>
              <h4>descripcion</h4>
            </td>
            <td>
              <h4>precio</h4>
            </td>
          </tr>
          {mProductos.map((item: Producto, index) => {
            return (
              <ItemProducto
                key={index}
                id={item.id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                precio={item.precio}
              ></ItemProducto>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
