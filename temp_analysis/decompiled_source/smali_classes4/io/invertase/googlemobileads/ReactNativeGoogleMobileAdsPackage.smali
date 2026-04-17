.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsPackage;
.super Lcom/facebook/react/TurboReactPackage;
.source "ReactNativeGoogleMobileAdsPackage.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0007\u00a2\u0006\u0004\u0008\u0002\u0010\u0003J\u001e\u0010\u0004\u001a\u0010\u0012\u000c\u0012\n\u0012\u0002\u0008\u0003\u0012\u0002\u0008\u00030\u00060\u00052\u0006\u0010\u0007\u001a\u00020\u0008H\u0016J\u001a\u0010\t\u001a\u0004\u0018\u00010\n2\u0006\u0010\u000b\u001a\u00020\u000c2\u0006\u0010\u0007\u001a\u00020\u0008H\u0016J\u0008\u0010\r\u001a\u00020\u000eH\u0016\u00a8\u0006\u000f"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsPackage;",
        "Lcom/facebook/react/TurboReactPackage;",
        "<init>",
        "()V",
        "createViewManagers",
        "",
        "Lcom/facebook/react/uimanager/ViewManager;",
        "reactContext",
        "Lcom/facebook/react/bridge/ReactApplicationContext;",
        "getModule",
        "Lcom/facebook/react/bridge/NativeModule;",
        "name",
        "",
        "getReactModuleInfoProvider",
        "Lcom/facebook/react/module/model/ReactModuleInfoProvider;",
        "react-native-google-mobile-ads_release"
    }
    k = 0x1
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# direct methods
.method public static synthetic $r8$lambda$C5a4sBH-pmM9UZWsC61ugEah_cM()Ljava/util/Map;
    .locals 1

    invoke-static {}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsPackage;->getReactModuleInfoProvider$lambda$0()Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method public constructor <init>()V
    .locals 0

    .line 28
    invoke-direct {p0}, Lcom/facebook/react/TurboReactPackage;-><init>()V

    return-void
.end method

.method private static final getReactModuleInfoProvider$lambda$0()Ljava/util/Map;
    .locals 16

    .line 55
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    check-cast v0, Ljava/util/Map;

    .line 58
    new-instance v1, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v6, 0x0

    const/4 v7, 0x0

    const-string v2, "RNAppModule"

    const-string v3, "RNAppModule"

    const/4 v4, 0x0

    const/4 v5, 0x0

    invoke-direct/range {v1 .. v7}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v2, "RNAppModule"

    invoke-interface {v0, v2, v1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 67
    new-instance v3, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v8, 0x0

    const/4 v9, 0x0

    const-string v4, "RNGoogleMobileAdsModule"

    const-string v5, "RNGoogleMobileAdsModule"

    invoke-direct/range {v3 .. v9}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsModule"

    invoke-interface {v0, v1, v3}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 76
    new-instance v4, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v10, 0x0

    const-string v5, "RNGoogleMobileAdsConsentModule"

    const-string v6, "RNGoogleMobileAdsConsentModule"

    invoke-direct/range {v4 .. v10}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsConsentModule"

    invoke-interface {v0, v1, v4}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 85
    new-instance v5, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v11, 0x0

    const-string v6, "RNGoogleMobileAdsAppOpenModule"

    const-string v7, "RNGoogleMobileAdsAppOpenModule"

    invoke-direct/range {v5 .. v11}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsAppOpenModule"

    invoke-interface {v0, v1, v5}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 94
    new-instance v6, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v12, 0x0

    const-string v7, "RNGoogleMobileAdsInterstitialModule"

    const-string v8, "RNGoogleMobileAdsInterstitialModule"

    invoke-direct/range {v6 .. v12}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsInterstitialModule"

    invoke-interface {v0, v1, v6}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 103
    new-instance v7, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v13, 0x0

    const-string v8, "RNGoogleMobileAdsRewardedModule"

    const-string v9, "RNGoogleMobileAdsRewardedModule"

    invoke-direct/range {v7 .. v13}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsRewardedModule"

    invoke-interface {v0, v1, v7}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 112
    new-instance v8, Lcom/facebook/react/module/model/ReactModuleInfo;

    const/4 v14, 0x0

    const-string v9, "RNGoogleMobileAdsRewardedInterstitialModule"

    const-string v10, "RNGoogleMobileAdsRewardedInterstitialModule"

    invoke-direct/range {v8 .. v14}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsRewardedInterstitialModule"

    invoke-interface {v0, v1, v8}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 121
    new-instance v9, Lcom/facebook/react/module/model/ReactModuleInfo;

    const-string v10, "RNGoogleMobileAdsNativeModule"

    const-string v11, "RNGoogleMobileAdsNativeModule"

    const/4 v15, 0x0

    invoke-direct/range {v9 .. v15}, Lcom/facebook/react/module/model/ReactModuleInfo;-><init>(Ljava/lang/String;Ljava/lang/String;ZZZZ)V

    const-string v1, "RNGoogleMobileAdsNativeModule"

    invoke-interface {v0, v1, v9}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-object v0
.end method


# virtual methods
.method public createViewManagers(Lcom/facebook/react/bridge/ReactApplicationContext;)Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/facebook/react/bridge/ReactApplicationContext;",
            ")",
            "Ljava/util/List<",
            "Lcom/facebook/react/uimanager/ViewManager<",
            "**>;>;"
        }
    .end annotation

    const-string v0, "reactContext"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v0, 0x3

    .line 33
    new-array v0, v0, [Lcom/facebook/react/uimanager/BaseViewManager;

    new-instance v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;

    invoke-direct {v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;-><init>()V

    const/4 v2, 0x0

    aput-object v1, v0, v2

    .line 34
    new-instance v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdViewManager;

    invoke-direct {v1, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdViewManager;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    const/4 v2, 0x1

    aput-object v1, v0, v2

    .line 35
    new-instance v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;

    invoke-direct {v1, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    const/4 p1, 0x2

    aput-object v1, v0, p1

    .line 32
    invoke-static {v0}, Lkotlin/collections/CollectionsKt;->listOf([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    return-object p1
.end method

.method public getModule(Ljava/lang/String;Lcom/facebook/react/bridge/ReactApplicationContext;)Lcom/facebook/react/bridge/NativeModule;
    .locals 1

    const-string v0, "name"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "reactContext"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 40
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v0

    sparse-switch v0, :sswitch_data_0

    goto/16 :goto_0

    :sswitch_0
    const-string v0, "RNGoogleMobileAdsAppOpenModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_0

    goto/16 :goto_0

    .line 44
    :cond_0
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAppOpenModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAppOpenModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_1
    const-string v0, "RNGoogleMobileAdsInterstitialModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    goto/16 :goto_0

    .line 45
    :cond_1
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsInterstitialModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsInterstitialModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_2
    const-string v0, "RNGoogleMobileAdsModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    goto :goto_0

    .line 42
    :cond_2
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_3
    const-string v0, "RNAppModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    goto :goto_0

    .line 41
    :cond_3
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeAppModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeAppModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_4
    const-string v0, "RNGoogleMobileAdsNativeModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_4

    goto :goto_0

    .line 48
    :cond_4
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_5
    const-string v0, "RNGoogleMobileAdsRewardedInterstitialModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_5

    goto :goto_0

    .line 47
    :cond_5
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsRewardedInterstitialModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsRewardedInterstitialModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_6
    const-string v0, "RNGoogleMobileAdsConsentModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_6

    goto :goto_0

    .line 43
    :cond_6
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsConsentModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsConsentModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    .line 40
    :sswitch_7
    const-string v0, "RNGoogleMobileAdsRewardedModule"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_7

    goto :goto_0

    .line 46
    :cond_7
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsRewardedModule;

    invoke-direct {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsRewardedModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    check-cast p1, Lcom/facebook/react/bridge/NativeModule;

    return-object p1

    :goto_0
    const/4 p1, 0x0

    return-object p1

    nop

    :sswitch_data_0
    .sparse-switch
        -0x5ba462ed -> :sswitch_7
        -0x53abacf3 -> :sswitch_6
        -0x47d2e321 -> :sswitch_5
        -0x43a75f64 -> :sswitch_4
        -0x1a0ff6ef -> :sswitch_3
        0x1c193065 -> :sswitch_2
        0x1f1e4531 -> :sswitch_1
        0x2116363e -> :sswitch_0
    .end sparse-switch
.end method

.method public getReactModuleInfoProvider()Lcom/facebook/react/module/model/ReactModuleInfoProvider;
    .locals 1

    .line 54
    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsPackage$$ExternalSyntheticLambda0;

    invoke-direct {v0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsPackage$$ExternalSyntheticLambda0;-><init>()V

    return-object v0
.end method
