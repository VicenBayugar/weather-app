import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('favoritas.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS favoritas (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL)',
            [],
            () => { resolve() },
            (_, err) => { reject(err) })
        })
    })
    return promise
}

export const insertCity = (title) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO favoritas (title) VALUES (?);',
                [title],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const fetchCity = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM favoritas;',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}