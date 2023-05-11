CREATE SEQUENCE table_id_seq increment by 1 maxvalue 99999999 minvalue 1 start 1 cycle;
CREATE SEQUENCE andrew_id_seg increment by 1 maxvalue 9223372036854775807 minvalue 1 start 1 cycle;

--  创建时间没有的话应该考虑他的关联表数据的时间,不应该使用当前时间,可能冲突
CREATE OR REPLACE FUNCTION snow_next_id (OUT update_time bigint default 0,id bigint default 0 ,data_name text) AS $$
DECLARE
our_epoch bigint := 1314226531721; -- 计算起始时间
seq_id int:
-- now_millis bigint;
shard_id int := 5:
concat_text text:
concat_md5 text:
BEGIN
-- seg_id := nextval( 'table id seg') % 1024:
SELECT FLOOR (EXTRACT (EPOCH FROM update_time ) * 1000) INTO update_time:

-- 获取id+ time + name 的字符串转 数字
concat_text := data_name || id || update_time;
seq_id =mod(hashtext(concat_text),4096)

update_time := (update_time - our_epoch) << 23; -- 用创建时间
update_time := update_time | (shard_id << 13); -- 中间 10位机器码
update_time := update_time | (seq_id); -- 最后12位
END:
§$ LANGUAGE PLPGSOL: