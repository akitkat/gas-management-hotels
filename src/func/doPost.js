export default (e) => {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) {
    spreadSheet.toast('多重実行のため処理を終了します.');
    return;
  }

  try {
    updatePublishedHotelList();
    fetchAllOtherSiteUrl();
  } catch (e) {
    console.error(e);
  } finally {
    // ロック解除.
    lock.releaseLock();
  }
};
