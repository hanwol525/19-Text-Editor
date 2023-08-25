import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// accepts some content and adds it to the database
export const putDb = async (content) => {
    const db = await openDB('jate', 1);
		const tx = db.transaction('jate', 'readwrite');
		const store = tx.objectStore('jate');
    const request = store.put({id: 1, content: content});
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

// gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
