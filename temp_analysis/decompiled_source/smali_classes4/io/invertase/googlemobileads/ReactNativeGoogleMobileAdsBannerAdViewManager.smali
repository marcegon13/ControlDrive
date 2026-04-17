.class public Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;
.super Lcom/facebook/react/uimanager/SimpleViewManager;
.source "ReactNativeGoogleMobileAdsBannerAdViewManager.java"


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/facebook/react/uimanager/SimpleViewManager<",
        "Lio/invertase/googlemobileads/common/ReactNativeAdView;",
        ">;"
    }
.end annotation


# static fields
.field private static final REACT_CLASS:Ljava/lang/String; = "RNGoogleMobileAdsBannerView"


# instance fields
.field private final COMMAND_ID_LOAD:Ljava/lang/String;

.field private final COMMAND_ID_RECORD_MANUAL_IMPRESSION:Ljava/lang/String;

.field private final EVENT_AD_CLICKED:Ljava/lang/String;

.field private final EVENT_AD_CLOSED:Ljava/lang/String;

.field private final EVENT_AD_FAILED_TO_LOAD:Ljava/lang/String;

.field private final EVENT_AD_IMPRESSION:Ljava/lang/String;

.field private final EVENT_AD_LOADED:Ljava/lang/String;

.field private final EVENT_AD_OPENED:Ljava/lang/String;

.field private final EVENT_APP_EVENT:Ljava/lang/String;

.field private final EVENT_PAID:Ljava/lang/String;

.field private final EVENT_SIZE_CHANGE:Ljava/lang/String;


# direct methods
.method static bridge synthetic -$$Nest$msendEvent(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;)V
    .locals 0

    invoke-direct {p0, p1, p2, p3}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->sendEvent(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;)V

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 56
    invoke-direct {p0}, Lcom/facebook/react/uimanager/SimpleViewManager;-><init>()V

    .line 59
    const-string v0, "onAdLoaded"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_AD_LOADED:Ljava/lang/String;

    .line 60
    const-string v0, "onAdImpression"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_AD_IMPRESSION:Ljava/lang/String;

    .line 61
    const-string v0, "onAdClicked"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_AD_CLICKED:Ljava/lang/String;

    .line 62
    const-string v0, "onAdFailedToLoad"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_AD_FAILED_TO_LOAD:Ljava/lang/String;

    .line 63
    const-string v0, "onAdOpened"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_AD_OPENED:Ljava/lang/String;

    .line 64
    const-string v0, "onAdClosed"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_AD_CLOSED:Ljava/lang/String;

    .line 65
    const-string v0, "onPaid"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_PAID:Ljava/lang/String;

    .line 66
    const-string v0, "onSizeChange"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_SIZE_CHANGE:Ljava/lang/String;

    .line 67
    const-string v0, "onAppEvent"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->EVENT_APP_EVENT:Ljava/lang/String;

    .line 68
    const-string v0, "recordManualImpression"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->COMMAND_ID_RECORD_MANUAL_IMPRESSION:Ljava/lang/String;

    .line 69
    const-string v0, "load"

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->COMMAND_ID_LOAD:Ljava/lang/String;

    return-void
.end method

.method private getAdView(Landroid/view/ViewGroup;)Lcom/google/android/gms/ads/BaseAdView;
    .locals 1
    .annotation runtime Ljavax/annotation/Nullable;
    .end annotation

    const/4 v0, 0x0

    .line 318
    invoke-virtual {p1, v0}, Landroid/view/ViewGroup;->getChildAt(I)Landroid/view/View;

    move-result-object p1

    check-cast p1, Lcom/google/android/gms/ads/BaseAdView;

    return-object p1
.end method

.method private initAdView(Lio/invertase/googlemobileads/common/ReactNativeAdView;)Lcom/google/android/gms/ads/BaseAdView;
    .locals 3

    .line 205
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->getAdView(Landroid/view/ViewGroup;)Lcom/google/android/gms/ads/BaseAdView;

    move-result-object v0

    const/4 v1, 0x0

    if-eqz v0, :cond_1

    .line 207
    invoke-virtual {v0, v1}, Lcom/google/android/gms/ads/BaseAdView;->setAdListener(Lcom/google/android/gms/ads/AdListener;)V

    .line 208
    instance-of v2, v0, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    if-eqz v2, :cond_0

    .line 209
    move-object v2, v0

    check-cast v2, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    invoke-virtual {v2, v1}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;->setAppEventListener(Lcom/google/android/gms/ads/admanager/AppEventListener;)V

    .line 211
    :cond_0
    invoke-virtual {v0}, Lcom/google/android/gms/ads/BaseAdView;->destroy()V

    .line 212
    invoke-virtual {p1, v0}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->removeView(Landroid/view/View;)V

    .line 218
    :cond_1
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getContext()Landroid/content/Context;

    move-result-object v0

    check-cast v0, Lcom/facebook/react/bridge/ReactContext;

    invoke-virtual {v0}, Lcom/facebook/react/bridge/ReactContext;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v0

    if-nez v0, :cond_2

    return-object v1

    .line 222
    :cond_2
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getUnitId()Ljava/lang/String;

    move-result-object v1

    invoke-static {v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsCommon;->isAdManagerUnit(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 223
    new-instance v1, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    invoke-direct {v1, v0}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;-><init>(Landroid/content/Context;)V

    goto :goto_0

    .line 224
    :cond_3
    new-instance v1, Lcom/google/android/gms/ads/AdView;

    invoke-direct {v1, v0}, Lcom/google/android/gms/ads/AdView;-><init>(Landroid/content/Context;)V

    :goto_0
    const/high16 v0, 0x60000

    .line 226
    invoke-virtual {v1, v0}, Lcom/google/android/gms/ads/BaseAdView;->setDescendantFocusability(I)V

    .line 227
    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager$1;

    invoke-direct {v0, p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager$1;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;Lio/invertase/googlemobileads/common/ReactNativeAdView;)V

    invoke-virtual {v1, v0}, Lcom/google/android/gms/ads/BaseAdView;->setOnPaidEventListener(Lcom/google/android/gms/ads/OnPaidEventListener;)V

    .line 238
    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager$2;

    invoke-direct {v0, p0, v1, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager$2;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;Lcom/google/android/gms/ads/BaseAdView;Lio/invertase/googlemobileads/common/ReactNativeAdView;)V

    invoke-virtual {v1, v0}, Lcom/google/android/gms/ads/BaseAdView;->setAdListener(Lcom/google/android/gms/ads/AdListener;)V

    .line 299
    instance-of v0, v1, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    if-eqz v0, :cond_4

    .line 300
    move-object v0, v1

    check-cast v0, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    new-instance v2, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager$3;

    invoke-direct {v2, p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager$3;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;Lio/invertase/googlemobileads/common/ReactNativeAdView;)V

    .line 301
    invoke-virtual {v0, v2}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;->setAppEventListener(Lcom/google/android/gms/ads/admanager/AppEventListener;)V

    .line 312
    :cond_4
    invoke-virtual {p1, v1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->addView(Landroid/view/View;)V

    return-object v1
.end method

.method private requestAd(Lio/invertase/googlemobileads/common/ReactNativeAdView;)V
    .locals 7

    .line 322
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getUnitId()Ljava/lang/String;

    move-result-object v0

    .line 323
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getSizes()Ljava/util/List;

    move-result-object v1

    .line 324
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getRequest()Lcom/google/android/gms/ads/AdRequest;

    move-result-object v2

    .line 325
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getManualImpressionsEnabled()Z

    move-result v3

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    if-eqz v1, :cond_4

    if-eqz v0, :cond_4

    if-eqz v2, :cond_4

    if-nez v3, :cond_0

    goto :goto_1

    .line 331
    :cond_0
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->initAdView(Lio/invertase/googlemobileads/common/ReactNativeAdView;)Lcom/google/android/gms/ads/BaseAdView;

    move-result-object v4

    if-eqz v4, :cond_4

    .line 333
    invoke-virtual {v4, v0}, Lcom/google/android/gms/ads/BaseAdView;->setAdUnitId(Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 334
    invoke-virtual {p1, v0}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setIsFluid(Z)V

    .line 335
    instance-of v5, v4, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    if-eqz v5, :cond_2

    .line 336
    sget-object v5, Lcom/google/android/gms/ads/AdSize;->FLUID:Lcom/google/android/gms/ads/AdSize;

    invoke-interface {v1, v5}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v5

    const/4 v6, 0x1

    if-eqz v5, :cond_1

    .line 337
    invoke-virtual {p1, v6}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setIsFluid(Z)V

    .line 339
    :cond_1
    move-object p1, v4

    check-cast p1, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    new-array v0, v0, [Lcom/google/android/gms/ads/AdSize;

    invoke-interface {v1, v0}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/google/android/gms/ads/AdSize;

    invoke-virtual {p1, v0}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;->setAdSizes([Lcom/google/android/gms/ads/AdSize;)V

    .line 341
    invoke-virtual {v3}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_3

    .line 342
    invoke-virtual {p1, v6}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;->setManualImpressionsEnabled(Z)V

    goto :goto_0

    .line 345
    :cond_2
    invoke-interface {v1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/google/android/gms/ads/AdSize;

    invoke-virtual {v4, p1}, Lcom/google/android/gms/ads/BaseAdView;->setAdSize(Lcom/google/android/gms/ads/AdSize;)V

    .line 348
    :cond_3
    :goto_0
    invoke-virtual {v4, v2}, Lcom/google/android/gms/ads/BaseAdView;->loadAd(Lcom/google/android/gms/ads/AdRequest;)V

    :cond_4
    :goto_1
    return-void
.end method

.method private sendEvent(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;)V
    .locals 2

    .line 353
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    .line 354
    const-string v1, "type"

    invoke-interface {v0, v1, p2}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    if-eqz p3, :cond_0

    .line 357
    invoke-interface {v0, p3}, Lcom/facebook/react/bridge/WritableMap;->merge(Lcom/facebook/react/bridge/ReadableMap;)V

    .line 360
    :cond_0
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getContext()Landroid/content/Context;

    move-result-object p2

    check-cast p2, Lcom/facebook/react/uimanager/ThemedReactContext;

    .line 362
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getId()I

    move-result p3

    invoke-static {p2, p3}, Lcom/facebook/react/uimanager/UIManagerHelper;->getEventDispatcherForReactTag(Lcom/facebook/react/bridge/ReactContext;I)Lcom/facebook/react/uimanager/events/EventDispatcher;

    move-result-object p2

    if-eqz p2, :cond_1

    .line 364
    new-instance p3, Lio/invertase/googlemobileads/OnNativeEvent;

    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getId()I

    move-result p1

    invoke-direct {p3, p1, v0}, Lio/invertase/googlemobileads/OnNativeEvent;-><init>(ILcom/facebook/react/bridge/WritableMap;)V

    invoke-interface {p2, p3}, Lcom/facebook/react/uimanager/events/EventDispatcher;->dispatchEvent(Lcom/facebook/react/uimanager/events/Event;)V

    :cond_1
    return-void
.end method


# virtual methods
.method public bridge synthetic createViewInstance(Lcom/facebook/react/uimanager/ThemedReactContext;)Landroid/view/View;
    .locals 0
    .param p1    # Lcom/facebook/react/uimanager/ThemedReactContext;
        .annotation runtime Ljavax/annotation/Nonnull;
        .end annotation
    .end param
    .annotation runtime Ljavax/annotation/Nonnull;
    .end annotation

    .line 56
    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->createViewInstance(Lcom/facebook/react/uimanager/ThemedReactContext;)Lio/invertase/googlemobileads/common/ReactNativeAdView;

    move-result-object p1

    return-object p1
.end method

.method public createViewInstance(Lcom/facebook/react/uimanager/ThemedReactContext;)Lio/invertase/googlemobileads/common/ReactNativeAdView;
    .locals 1
    .param p1    # Lcom/facebook/react/uimanager/ThemedReactContext;
        .annotation runtime Ljavax/annotation/Nonnull;
        .end annotation
    .end param
    .annotation runtime Ljavax/annotation/Nonnull;
    .end annotation

    .line 80
    new-instance v0, Lio/invertase/googlemobileads/common/ReactNativeAdView;

    invoke-direct {v0, p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;-><init>(Landroid/content/Context;)V

    return-object v0
.end method

.method public getExportedCustomDirectEventTypeConstants()Ljava/util/Map;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation

    .line 85
    invoke-static {}, Lcom/facebook/react/common/MapBuilder;->builder()Lcom/facebook/react/common/MapBuilder$Builder;

    move-result-object v0

    .line 86
    const-string v1, "registrationName"

    const-string v2, "onNativeEvent"

    invoke-static {v1, v2}, Lcom/facebook/react/common/MapBuilder;->of(Ljava/lang/Object;Ljava/lang/Object;)Ljava/util/Map;

    move-result-object v1

    const-string v2, "topNativeEvent"

    invoke-virtual {v0, v2, v1}, Lcom/facebook/react/common/MapBuilder$Builder;->put(Ljava/lang/Object;Ljava/lang/Object;)Lcom/facebook/react/common/MapBuilder$Builder;

    .line 87
    invoke-virtual {v0}, Lcom/facebook/react/common/MapBuilder$Builder;->build()Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method public getName()Ljava/lang/String;
    .locals 1
    .annotation runtime Ljavax/annotation/Nonnull;
    .end annotation

    .line 74
    const-string v0, "RNGoogleMobileAdsBannerView"

    return-object v0
.end method

.method public bridge synthetic onAfterUpdateTransaction(Landroid/view/View;)V
    .locals 0

    .line 56
    check-cast p1, Lio/invertase/googlemobileads/common/ReactNativeAdView;

    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->onAfterUpdateTransaction(Lio/invertase/googlemobileads/common/ReactNativeAdView;)V

    return-void
.end method

.method public onAfterUpdateTransaction(Lio/invertase/googlemobileads/common/ReactNativeAdView;)V
    .locals 1

    .line 183
    invoke-super {p0, p1}, Lcom/facebook/react/uimanager/SimpleViewManager;->onAfterUpdateTransaction(Landroid/view/View;)V

    .line 184
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getPropsChanged()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 185
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->requestAd(Lio/invertase/googlemobileads/common/ReactNativeAdView;)V

    :cond_0
    const/4 v0, 0x0

    .line 187
    invoke-virtual {p1, v0}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setPropsChanged(Z)V

    return-void
.end method

.method public bridge synthetic onDropViewInstance(Landroid/view/View;)V
    .locals 0

    .line 56
    check-cast p1, Lio/invertase/googlemobileads/common/ReactNativeAdView;

    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->onDropViewInstance(Lio/invertase/googlemobileads/common/ReactNativeAdView;)V

    return-void
.end method

.method public onDropViewInstance(Lio/invertase/googlemobileads/common/ReactNativeAdView;)V
    .locals 3

    .line 192
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->getAdView(Landroid/view/ViewGroup;)Lcom/google/android/gms/ads/BaseAdView;

    move-result-object v0

    if-eqz v0, :cond_1

    const/4 v1, 0x0

    .line 194
    invoke-virtual {v0, v1}, Lcom/google/android/gms/ads/BaseAdView;->setAdListener(Lcom/google/android/gms/ads/AdListener;)V

    .line 195
    instance-of v2, v0, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    if-eqz v2, :cond_0

    .line 196
    move-object v2, v0

    check-cast v2, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    invoke-virtual {v2, v1}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;->setAppEventListener(Lcom/google/android/gms/ads/admanager/AppEventListener;)V

    .line 198
    :cond_0
    invoke-virtual {v0}, Lcom/google/android/gms/ads/BaseAdView;->destroy()V

    .line 199
    invoke-virtual {p1, v0}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->removeView(Landroid/view/View;)V

    .line 201
    :cond_1
    invoke-super {p0, p1}, Lcom/facebook/react/uimanager/SimpleViewManager;->onDropViewInstance(Landroid/view/View;)V

    return-void
.end method

.method public bridge synthetic receiveCommand(Landroid/view/View;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;)V
    .locals 0
    .param p3    # Lcom/facebook/react/bridge/ReadableArray;
        .annotation runtime Ljavax/annotation/Nullable;
        .end annotation
    .end param

    .line 56
    check-cast p1, Lio/invertase/googlemobileads/common/ReactNativeAdView;

    invoke-virtual {p0, p1, p2, p3}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->receiveCommand(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;)V

    return-void
.end method

.method public receiveCommand(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;)V
    .locals 0
    .param p3    # Lcom/facebook/react/bridge/ReadableArray;
        .annotation runtime Ljavax/annotation/Nullable;
        .end annotation
    .end param

    .line 93
    invoke-super {p0, p1, p2, p3}, Lcom/facebook/react/uimanager/SimpleViewManager;->receiveCommand(Landroid/view/View;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;)V

    .line 95
    const-string p3, "recordManualImpression"

    invoke-virtual {p2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_0

    .line 96
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->getAdView(Landroid/view/ViewGroup;)Lcom/google/android/gms/ads/BaseAdView;

    move-result-object p1

    .line 97
    instance-of p2, p1, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    if-eqz p2, :cond_1

    .line 98
    check-cast p1, Lcom/google/android/gms/ads/admanager/AdManagerAdView;

    invoke-virtual {p1}, Lcom/google/android/gms/ads/admanager/AdManagerAdView;->recordManualImpression()V

    return-void

    .line 100
    :cond_0
    const-string p3, "load"

    invoke-virtual {p2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_1

    .line 101
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->getAdView(Landroid/view/ViewGroup;)Lcom/google/android/gms/ads/BaseAdView;

    move-result-object p2

    .line 102
    invoke-virtual {p1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->getRequest()Lcom/google/android/gms/ads/AdRequest;

    move-result-object p1

    .line 103
    invoke-virtual {p2, p1}, Lcom/google/android/gms/ads/BaseAdView;->loadAd(Lcom/google/android/gms/ads/AdRequest;)V

    :cond_1
    return-void
.end method

.method public setManualImpressionsEnabled(Lio/invertase/googlemobileads/common/ReactNativeAdView;Z)V
    .locals 0
    .annotation runtime Lcom/facebook/react/uimanager/annotations/ReactProp;
        name = "manualImpressionsEnabled"
    .end annotation

    .line 177
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setManualImpressionsEnabled(Z)V

    const/4 p2, 0x1

    .line 178
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setPropsChanged(Z)V

    return-void
.end method

.method public setRequest(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/uimanager/annotations/ReactProp;
        name = "request"
    .end annotation

    .line 116
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p2}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 117
    invoke-static {v0}, Lio/invertase/googlemobileads/common/SharedUtils;->jsonObjectToWritableMap(Lorg/json/JSONObject;)Lcom/facebook/react/bridge/WritableMap;

    move-result-object p2

    .line 118
    invoke-static {p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsCommon;->buildAdRequest(Lcom/facebook/react/bridge/ReadableMap;)Lcom/google/android/gms/ads/admanager/AdManagerAdRequest;

    move-result-object p2

    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setRequest(Lcom/google/android/gms/ads/AdRequest;)V

    const/4 p2, 0x1

    .line 119
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setPropsChanged(Z)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-void

    :catch_0
    move-exception p1

    .line 121
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    return-void
.end method

.method public setSizeConfig(Lio/invertase/googlemobileads/common/ReactNativeAdView;Lcom/facebook/react/bridge/ReadableMap;)V
    .locals 6
    .annotation runtime Lcom/facebook/react/uimanager/annotations/ReactProp;
        name = "sizeConfig"
    .end annotation

    if-eqz p2, :cond_6

    .line 129
    const-string v0, "maxHeight"

    invoke-interface {p2, v0}, Lcom/facebook/react/bridge/ReadableMap;->hasKey(Ljava/lang/String;)Z

    move-result v1

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    invoke-interface {p2, v0}, Lcom/facebook/react/bridge/ReadableMap;->isNull(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_0

    .line 130
    invoke-interface {p2, v0}, Lcom/facebook/react/bridge/ReadableMap;->getDouble(Ljava/lang/String;)D

    move-result-wide v0

    double-to-float v0, v0

    .line 131
    invoke-virtual {p1, v0}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setMaxAdHeight(F)V

    goto :goto_0

    .line 133
    :cond_0
    invoke-virtual {p1, v2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setMaxAdHeight(F)V

    .line 137
    :goto_0
    const-string v0, "width"

    invoke-interface {p2, v0}, Lcom/facebook/react/bridge/ReadableMap;->hasKey(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p2, v0}, Lcom/facebook/react/bridge/ReadableMap;->isNull(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 138
    invoke-interface {p2, v0}, Lcom/facebook/react/bridge/ReadableMap;->getDouble(Ljava/lang/String;)D

    move-result-wide v1

    double-to-float v1, v1

    .line 139
    invoke-virtual {p1, v1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setAdWidth(F)V

    goto :goto_1

    .line 141
    :cond_1
    invoke-virtual {p1, v2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setAdWidth(F)V

    .line 144
    :goto_1
    const-string v1, "sizes"

    invoke-interface {p2, v1}, Lcom/facebook/react/bridge/ReadableMap;->hasKey(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_5

    invoke-interface {p2, v1}, Lcom/facebook/react/bridge/ReadableMap;->isNull(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_5

    .line 145
    invoke-interface {p2, v1}, Lcom/facebook/react/bridge/ReadableMap;->getArray(Ljava/lang/String;)Lcom/facebook/react/bridge/ReadableArray;

    move-result-object p2

    if-eqz p2, :cond_5

    .line 148
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    const/4 v2, 0x0

    move v3, v2

    .line 149
    :goto_2
    invoke-interface {p2}, Lcom/facebook/react/bridge/ReadableArray;->size()I

    move-result v4

    if-ge v3, v4, :cond_3

    .line 150
    invoke-interface {p2, v3}, Lcom/facebook/react/bridge/ReadableArray;->getType(I)Lcom/facebook/react/bridge/ReadableType;

    move-result-object v4

    sget-object v5, Lcom/facebook/react/bridge/ReadableType;->String:Lcom/facebook/react/bridge/ReadableType;

    if-ne v4, v5, :cond_2

    .line 151
    invoke-interface {p2, v3}, Lcom/facebook/react/bridge/ReadableArray;->getString(I)Ljava/lang/String;

    move-result-object v4

    .line 153
    invoke-static {v4, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsCommon;->getAdSize(Ljava/lang/String;Landroid/view/ViewGroup;)Lcom/google/android/gms/ads/AdSize;

    move-result-object v4

    .line 154
    invoke-interface {v1, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_2
    add-int/lit8 v3, v3, 0x1

    goto :goto_2

    .line 159
    :cond_3
    invoke-interface {v1}, Ljava/util/List;->size()I

    move-result p2

    if-lez p2, :cond_4

    sget-object p2, Lcom/google/android/gms/ads/AdSize;->FLUID:Lcom/google/android/gms/ads/AdSize;

    invoke-interface {v1, p2}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result p2

    if-nez p2, :cond_4

    .line 160
    invoke-interface {v1, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Lcom/google/android/gms/ads/AdSize;

    .line 161
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v2

    .line 162
    invoke-virtual {p2}, Lcom/google/android/gms/ads/AdSize;->getWidth()I

    move-result v3

    int-to-double v3, v3

    invoke-interface {v2, v0, v3, v4}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    .line 163
    invoke-virtual {p2}, Lcom/google/android/gms/ads/AdSize;->getHeight()I

    move-result p2

    int-to-double v3, p2

    const-string p2, "height"

    invoke-interface {v2, p2, v3, v4}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    .line 164
    const-string p2, "onSizeChange"

    invoke-direct {p0, p1, p2, v2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsBannerAdViewManager;->sendEvent(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;)V

    .line 167
    :cond_4
    invoke-virtual {p1, v1}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setSizes(Ljava/util/List;)V

    :cond_5
    const/4 p2, 0x1

    .line 171
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setPropsChanged(Z)V

    :cond_6
    return-void
.end method

.method public setUnitId(Lio/invertase/googlemobileads/common/ReactNativeAdView;Ljava/lang/String;)V
    .locals 0
    .annotation runtime Lcom/facebook/react/uimanager/annotations/ReactProp;
        name = "unitId"
    .end annotation

    .line 109
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setUnitId(Ljava/lang/String;)V

    const/4 p2, 0x1

    .line 110
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeAdView;->setPropsChanged(Z)V

    return-void
.end method
