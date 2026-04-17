.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;
.super Landroid/widget/FrameLayout;
.source "ReactNativeGoogleMobileAdsNativeAdView.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0008\u0003\n\u0002\u0010\u0008\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0000\u0008\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0004\u0008\u0004\u0010\u0005J\u0010\u0010\u0010\u001a\u00020\u00112\u0008\u0010\u0012\u001a\u0004\u0018\u00010\u0013J\u0016\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\u0017J\u0008\u0010\u0018\u001a\u00020\u0011H\u0002J\u0008\u0010\u0019\u001a\u00020\u0011H\u0016J\u0006\u0010\u001a\u001a\u00020\u0011R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u0008\u0010\tR\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0010\u0010\u000c\u001a\u0004\u0018\u00010\rX\u0082\u000e\u00a2\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0082\u000e\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u001b\u001a\u00020\u001cX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u001d"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;",
        "Landroid/widget/FrameLayout;",
        "context",
        "Lcom/facebook/react/bridge/ReactContext;",
        "<init>",
        "(Lcom/facebook/react/bridge/ReactContext;)V",
        "viewGroup",
        "Lcom/facebook/react/views/view/ReactViewGroup;",
        "getViewGroup",
        "()Lcom/facebook/react/views/view/ReactViewGroup;",
        "nativeAdView",
        "Lcom/google/android/gms/ads/nativead/NativeAdView;",
        "nativeAd",
        "Lcom/google/android/gms/ads/nativead/NativeAd;",
        "reloadJob",
        "Lkotlinx/coroutines/Job;",
        "setResponseId",
        "",
        "responseId",
        "",
        "registerAsset",
        "assetType",
        "reactTag",
        "",
        "reloadAd",
        "requestLayout",
        "destroy",
        "measureAndLayout",
        "Ljava/lang/Runnable;",
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


# instance fields
.field private final context:Lcom/facebook/react/bridge/ReactContext;

.field private final measureAndLayout:Ljava/lang/Runnable;

.field private nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

.field private final nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

.field private reloadJob:Lkotlinx/coroutines/Job;

.field private final viewGroup:Lcom/facebook/react/views/view/ReactViewGroup;


# direct methods
.method public static synthetic $r8$lambda$z4D0blYBCKdAaNeeYs2S5S6wLRg(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;)V
    .locals 0

    invoke-static {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->measureAndLayout$lambda$1(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;)V

    return-void
.end method

.method public constructor <init>(Lcom/facebook/react/bridge/ReactContext;)V
    .locals 2

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 39
    move-object v0, p1

    check-cast v0, Landroid/content/Context;

    invoke-direct {p0, v0}, Landroid/widget/FrameLayout;-><init>(Landroid/content/Context;)V

    .line 38
    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->context:Lcom/facebook/react/bridge/ReactContext;

    .line 40
    new-instance v0, Lcom/facebook/react/views/view/ReactViewGroup;

    move-object v1, p1

    check-cast v1, Landroid/content/Context;

    invoke-direct {v0, v1}, Lcom/facebook/react/views/view/ReactViewGroup;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->viewGroup:Lcom/facebook/react/views/view/ReactViewGroup;

    .line 41
    new-instance v1, Lcom/google/android/gms/ads/nativead/NativeAdView;

    check-cast p1, Landroid/content/Context;

    invoke-direct {v1, p1}, Lcom/google/android/gms/ads/nativead/NativeAdView;-><init>(Landroid/content/Context;)V

    iput-object v1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    .line 46
    check-cast v0, Landroid/view/View;

    invoke-virtual {v1, v0}, Lcom/google/android/gms/ads/nativead/NativeAdView;->addView(Landroid/view/View;)V

    .line 47
    check-cast v1, Landroid/view/View;

    invoke-virtual {p0, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->addView(Landroid/view/View;)V

    .line 100
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView$$ExternalSyntheticLambda0;

    invoke-direct {p1, p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView$$ExternalSyntheticLambda0;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;)V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->measureAndLayout:Ljava/lang/Runnable;

    return-void
.end method

.method public static final synthetic access$getNativeAd$p(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;)Lcom/google/android/gms/ads/nativead/NativeAd;
    .locals 0

    .line 36
    iget-object p0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    return-object p0
.end method

.method public static final synthetic access$getNativeAdView$p(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;)Lcom/google/android/gms/ads/nativead/NativeAdView;
    .locals 0

    .line 36
    iget-object p0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    return-object p0
.end method

.method private static final measureAndLayout$lambda$1(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;)V
    .locals 4

    .line 102
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->getWidth()I

    move-result v0

    const/high16 v1, 0x40000000    # 2.0f

    invoke-static {v0, v1}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v0

    .line 103
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->getHeight()I

    move-result v2

    invoke-static {v2, v1}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v1

    .line 101
    invoke-virtual {p0, v0, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->measure(II)V

    .line 105
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->getLeft()I

    move-result v0

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->getTop()I

    move-result v1

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->getRight()I

    move-result v2

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->getBottom()I

    move-result v3

    invoke-virtual {p0, v0, v1, v2, v3}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->layout(IIII)V

    return-void
.end method

.method private final reloadAd()V
    .locals 8

    .line 80
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->reloadJob:Lkotlinx/coroutines/Job;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    const/4 v2, 0x1

    invoke-static {v0, v1, v2, v1}, Lkotlinx/coroutines/Job$DefaultImpls;->cancel$default(Lkotlinx/coroutines/Job;Ljava/util/concurrent/CancellationException;ILjava/lang/Object;)V

    .line 81
    :cond_0
    invoke-static {}, Lkotlinx/coroutines/Dispatchers;->getMain()Lkotlinx/coroutines/MainCoroutineDispatcher;

    move-result-object v0

    check-cast v0, Lkotlin/coroutines/CoroutineContext;

    invoke-static {v0}, Lkotlinx/coroutines/CoroutineScopeKt;->CoroutineScope(Lkotlin/coroutines/CoroutineContext;)Lkotlinx/coroutines/CoroutineScope;

    move-result-object v2

    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView$reloadAd$1;

    invoke-direct {v0, p0, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView$reloadAd$1;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;Lkotlin/coroutines/Continuation;)V

    move-object v5, v0

    check-cast v5, Lkotlin/jvm/functions/Function2;

    const/4 v6, 0x3

    const/4 v7, 0x0

    const/4 v3, 0x0

    const/4 v4, 0x0

    invoke-static/range {v2 .. v7}, Lkotlinx/coroutines/BuildersKt;->launch$default(Lkotlinx/coroutines/CoroutineScope;Lkotlin/coroutines/CoroutineContext;Lkotlinx/coroutines/CoroutineStart;Lkotlin/jvm/functions/Function2;ILjava/lang/Object;)Lkotlinx/coroutines/Job;

    move-result-object v0

    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->reloadJob:Lkotlinx/coroutines/Job;

    return-void
.end method


# virtual methods
.method public final destroy()V
    .locals 3

    .line 94
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->reloadJob:Lkotlinx/coroutines/Job;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    const/4 v2, 0x1

    invoke-static {v0, v1, v2, v1}, Lkotlinx/coroutines/Job$DefaultImpls;->cancel$default(Lkotlinx/coroutines/Job;Ljava/util/concurrent/CancellationException;ILjava/lang/Object;)V

    .line 95
    :cond_0
    iput-object v1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->reloadJob:Lkotlinx/coroutines/Job;

    .line 96
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    iget-object v1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->viewGroup:Lcom/facebook/react/views/view/ReactViewGroup;

    check-cast v1, Landroid/view/View;

    invoke-virtual {v0, v1}, Lcom/google/android/gms/ads/nativead/NativeAdView;->removeView(Landroid/view/View;)V

    .line 97
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {v0}, Lcom/google/android/gms/ads/nativead/NativeAdView;->destroy()V

    return-void
.end method

.method public final getViewGroup()Lcom/facebook/react/views/view/ReactViewGroup;
    .locals 1

    .line 40
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->viewGroup:Lcom/facebook/react/views/view/ReactViewGroup;

    return-object v0
.end method

.method public final registerAsset(Ljava/lang/String;I)V
    .locals 1

    const-string v0, "assetType"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 62
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->context:Lcom/facebook/react/bridge/ReactContext;

    invoke-static {v0, p2}, Lcom/facebook/react/uimanager/UIManagerHelper;->getUIManagerForReactTag(Lcom/facebook/react/bridge/ReactContext;I)Lcom/facebook/react/bridge/UIManager;

    move-result-object v0

    if-eqz v0, :cond_b

    .line 63
    invoke-interface {v0, p2}, Lcom/facebook/react/bridge/UIManager;->resolveView(I)Landroid/view/View;

    move-result-object p2

    if-nez p2, :cond_0

    goto/16 :goto_1

    .line 64
    :cond_0
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v0

    sparse-switch v0, :sswitch_data_0

    goto/16 :goto_0

    :sswitch_0
    const-string v0, "callToAction"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    goto/16 :goto_0

    .line 67
    :cond_1
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setCallToActionView(Landroid/view/View;)V

    goto/16 :goto_0

    .line 64
    :sswitch_1
    const-string v0, "starRating"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    goto/16 :goto_0

    .line 71
    :cond_2
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setStarRatingView(Landroid/view/View;)V

    goto/16 :goto_0

    .line 64
    :sswitch_2
    const-string v0, "store"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    goto/16 :goto_0

    .line 70
    :cond_3
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setStoreView(Landroid/view/View;)V

    goto/16 :goto_0

    .line 64
    :sswitch_3
    const-string v0, "price"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_4

    goto/16 :goto_0

    .line 69
    :cond_4
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setPriceView(Landroid/view/View;)V

    goto :goto_0

    .line 64
    :sswitch_4
    const-string v0, "media"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_5

    goto :goto_0

    .line 74
    :cond_5
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    check-cast p2, Lcom/google/android/gms/ads/nativead/MediaView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setMediaView(Lcom/google/android/gms/ads/nativead/MediaView;)V

    goto :goto_0

    .line 64
    :sswitch_5
    const-string v0, "image"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_6

    goto :goto_0

    .line 73
    :cond_6
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setImageView(Landroid/view/View;)V

    goto :goto_0

    .line 64
    :sswitch_6
    const-string v0, "advertiser"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_7

    goto :goto_0

    .line 65
    :cond_7
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setAdvertiserView(Landroid/view/View;)V

    goto :goto_0

    .line 64
    :sswitch_7
    const-string v0, "icon"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_8

    goto :goto_0

    .line 72
    :cond_8
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setIconView(Landroid/view/View;)V

    goto :goto_0

    .line 64
    :sswitch_8
    const-string v0, "body"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_9

    goto :goto_0

    .line 66
    :cond_9
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setBodyView(Landroid/view/View;)V

    goto :goto_0

    .line 64
    :sswitch_9
    const-string v0, "headline"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_a

    goto :goto_0

    .line 68
    :cond_a
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAdView:Lcom/google/android/gms/ads/nativead/NativeAdView;

    invoke-virtual {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAdView;->setHeadlineView(Landroid/view/View;)V

    .line 76
    :goto_0
    invoke-direct {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->reloadAd()V

    :cond_b
    :goto_1
    return-void

    :sswitch_data_0
    .sparse-switch
        -0x4276722c -> :sswitch_9
        0x2e39a2 -> :sswitch_8
        0x313c79 -> :sswitch_7
        0x44bdd2b -> :sswitch_6
        0x5faa95b -> :sswitch_5
        0x62f6fe4 -> :sswitch_4
        0x65fb149 -> :sswitch_3
        0x68af8e1 -> :sswitch_2
        0x68531e8f -> :sswitch_1
        0x7a80110f -> :sswitch_0
    .end sparse-switch
.end method

.method public requestLayout()V
    .locals 1

    .line 89
    invoke-super {p0}, Landroid/widget/FrameLayout;->requestLayout()V

    .line 90
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->measureAndLayout:Ljava/lang/Runnable;

    invoke-virtual {p0, v0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method public final setResponseId(Ljava/lang/String;)V
    .locals 2

    .line 51
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->context:Lcom/facebook/react/bridge/ReactContext;

    const-class v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    invoke-virtual {v0, v1}, Lcom/facebook/react/bridge/ReactContext;->getNativeModule(Ljava/lang/Class;)Lcom/facebook/react/bridge/NativeModule;

    move-result-object v0

    check-cast v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    if-eqz v0, :cond_2

    if-nez p1, :cond_0

    .line 52
    const-string p1, ""

    :cond_0
    invoke-virtual {v0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->getNativeAd(Ljava/lang/String;)Lcom/google/android/gms/ads/nativead/NativeAd;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 53
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    invoke-static {v0, p1}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    goto :goto_0

    .line 56
    :cond_1
    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    .line 57
    invoke-direct {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeAdView;->reloadAd()V

    :cond_2
    :goto_0
    return-void
.end method
