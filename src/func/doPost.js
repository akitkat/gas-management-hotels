export default (e) => {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) {
    console.log('多重実行のため処理を終了します.');
    return;
  }

  try {
    updatePublishedHotelList();
  } catch (e) {
    console.error(e);
  } finally {
    // ロック解除.
    lock.releaseLock();
  }
};
