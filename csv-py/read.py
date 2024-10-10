
import csv

#python2可以用file替代open
with open("aimas1.csv","w",newline="", encoding="utf-8") as csvfile: 
    writer = csv.writer(csvfile)

    #先写入columns_name
    writer.writerow(["NAME",	"CODE",	"PARENT_CODE",	"SELECT_OPTION",	"RESOURCE_DATA"])
    writer.writerow(["Business Overview",	"aimas_business__overview",	None,	"NORMAL",'[{"createTime":"2024-08-16T10:48:41","createUser":3750559644112125952,"id":7182577575520534529,"lastModifyTime":"2024-08-16T10:48:41","lastModifyUser":3750559644112125952,"method":"GET","name":"ai","url":"campaign/list"},{"createTime":"2024-08-16T10:48:41","createUser":3750559644112125952,"id":7182577575520534530,"lastModifyTime":"2024-08-16T10:48:41","lastModifyUser":3750559644112125952,"method":"GET","name":"ai2","url":"campaign_group/group_list"},{"createTime":"2024-08-16T10:48:41","createUser":3750559644112125952,"id":7182577575520534531,"lastModifyTime":"2024-08-16T10:48:41","lastModifyUser":3750559644112125952,"method":"GET","name":"detail","url":"campaign/detail/*"}]'])
    #写入多行用writerows
    list = [
        {'name': 'Journey', 'key': 'journey'}, 
        {'name': 'Campaign', 'key': 'campaign'},
         {'name': 'Campaign Template', 'key': 'campaign_template'}, 
         {'name': 'Offer', 'key': 'offer','children':[
            {'name': 'Promotion Template', 'key': 'promotion_template'}, 
            {'name': 'Promotion Record', 'key': 'promotion_record'}, 
            {'name': 'Promotion Pos_parameters', 'key': 'promotion_POS_parameters'},
         ]}, 
         {'name': 'Delivery', 'key': 'delivery','children':[
            {'name': 'Sms Template', 'key': 'SMS_template'}, 
            {'name': 'Sms Record', 'key': 'SMS_record'}, 
            {'name': 'Email Template', 'key': 'email_template'}, 
            {'name': 'Email Record', 'key': 'email_record'}, 
            {'name': 'App Push', 'key': 'app_push'}
         ]}, 
         {'name': 'Retargeting Group', 'key': 'retargeting_group'}]

    for item in list:
        writer.writerows([
            [item["name"],"aimas_"+item["key"],None,"NORMAL"], # main
            [item["name"]+ " View","aimas_"+item["key"]+"_view","aimas_"+item["key"],"NORMAL"],
            ])
        if  'children' not in item:
            if 'record' in item["key"]:
                writer.writerows([
                    [item["name"]+ " List","aimas_"+item["key"]+"_list","aimas_"+item["key"],"NORMAL"],
                    [item["name"]+ " List View","aimas_"+item["key"]+"_list_view","aimas_"+item["key"]+"_list","NORMAL"],

                ])
            else:
                writer.writerows([
                    [item["name"]+ " List","aimas_"+item["key"]+"_list","aimas_"+item["key"],"NORMAL"],
                    [item["name"]+ " List View","aimas_"+item["key"]+"_list_view","aimas_"+item["key"]+"_list","NORMAL"],

                    [item["name"]+ " Item","aimas_"+item["key"]+"_item","aimas_"+item["key"],"NORMAL"],
                    [item["name"]+ " Item View","aimas_"+item["key"]+"_item_view","aimas_"+item["key"]+"_item","NORMAL"],
                    [item["name"]+ " Item Create","aimas_"+item["key"]+"_item_create","aimas_"+item["key"]+"_item","NORMAL"],
                    [item["name"]+ " Item Edit","aimas_"+item["key"]+"_item_edit","aimas_"+item["key"]+"_item","NORMAL"],
                    [item["name"]+ " Item Delete","aimas_"+item["key"]+"_item_delete","aimas_"+item["key"]+"_item","NORMAL"],
                ])
        else:
            for childi in item["children"]:
                if 'record' in childi["key"]:
                    writer.writerows([
                        [childi["name"],"aimas_"+childi["key"],"aimas_"+item["key"],"NORMAL"], # main
                        [childi["name"]+ " View","aimas_"+childi["key"]+"_view","aimas_"+childi["key"],"NORMAL"],

                        [childi["name"]+ " List","aimas_"+childi["key"]+"_list","aimas_"+childi["key"],"NORMAL"],
                        [childi["name"]+ " List View","aimas_"+childi["key"]+"_list_view","aimas_"+childi["key"]+"_list","NORMAL"],
                    ])
                else:
                    writer.writerows([
                        [childi["name"],"aimas_"+childi["key"],"aimas_"+item["key"],"NORMAL"], # main
                        [childi["name"]+ " View","aimas_"+childi["key"]+"_view","aimas_"+childi["key"],"NORMAL"],

                        [childi["name"]+ " List","aimas_"+childi["key"]+"_list","aimas_"+childi["key"],"NORMAL"],
                        [childi["name"]+ " List View","aimas_"+childi["key"]+"_list_view","aimas_"+childi["key"]+"_list","NORMAL"],

                        [childi["name"]+ " Item","aimas_"+childi["key"]+"_item","aimas_"+childi["key"],"NORMAL"],
                        [childi["name"]+ " Item View","aimas_"+childi["key"]+"_item_view","aimas_"+childi["key"]+"_item","NORMAL"],
                        [childi["name"]+ " Item Create","aimas_"+childi["key"]+"_item_create","aimas_"+childi["key"]+"_item","NORMAL"],
                        [childi["name"]+ " Item Edit","aimas_"+childi["key"]+"_item_edit","aimas_"+childi["key"]+"_item","NORMAL"],
                        [childi["name"]+ " Item Delete","aimas_"+childi["key"]+"_item_delete","aimas_"+childi["key"]+"_item","NORMAL"],
                    ])  

    print ("Good bye!")
    