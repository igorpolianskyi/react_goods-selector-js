import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [isSelected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelected !== '' ? `${isSelected} is selected` : 'No goods selected'}
        {isSelected === '' ? (
          ''
        ) : (
          <button
            onClick={() => setSelected('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              onClick={() => setSelected(isSelected !== good ? good : '')}
              className={classNames({
                'has-background-success-light': isSelected === good,
              })}
              data-cy="Good"
            >
              <td>
                <button
                  data-cy={isSelected === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={isSelected === good ? 'button is-info' : 'button'}
                >
                  {isSelected === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
