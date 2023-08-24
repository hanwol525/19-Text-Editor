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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await initdb();
		const tx = jateDb.transaction('jate', 'readwrite');
		const store = tx.objectStore('jate');
    const request = store.put(content);
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const openJate = await openDB('jate', 1);
  const transaction = openJate.transaction('jate', 'readonly');
  const storeAllJate = transaction.objectStore('jate');
  const getAllReq = storeAllJate.getAll();
  const final = await getAllReq;
  
  console.log('result.value', final);
  return final;
};

initdb();
