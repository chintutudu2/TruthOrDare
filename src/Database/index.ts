import {GameQuestion} from '@models/index';
import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

const TABLE_NAME = 'questions';

enablePromise(true);

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return openDatabase({name: 'truth-dare.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        id TEXT NOT NULL,
        type TEXT NOT NULL,
        rating TEXT NOT NULL,
        question TEXT NOT NULL
      )`,
      [],
    );
  });
};

export const isQuestionPresent = (
  db: SQLiteDatabase,
  id: string,
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM ${TABLE_NAME} WHERE id = ?`,
        [id],
        (tx, results) => {
          var len = results.rows.length;
          resolve(len > 0);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
};

export const saveQuestion = async (
  db: SQLiteDatabase,
  question: GameQuestion,
) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO ${TABLE_NAME} (id, type, rating, question) VALUES (?,?,?,?)`,
      [question.id, question.type, question.rating, question.question],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Question inserted');
        } else {
          console.log('Question insertion failed');
        }
      },
    );
  });
};
