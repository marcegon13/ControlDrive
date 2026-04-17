.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;
.super Lcom/facebook/react/uimanager/ViewGroupManager;
.source "ReactNativeGoogleMobileAdsMediaViewManager.kt"

# interfaces
.implements Lcom/facebook/react/viewmanagers/RNGoogleMobileAdsMediaViewManagerInterface;


# annotations
.annotation runtime Lcom/facebook/react/module/annotations/ReactModule;
    name = "RNGoogleMobileAdsMediaView"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager$Companion;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/facebook/react/uimanager/ViewGroupManager<",
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;",
        ">;",
        "Lcom/facebook/react/viewmanagers/RNGoogleMobileAdsMediaViewManagerInterface<",
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;",
        ">;"
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0006\u0008\u0007\u0018\u0000 \u00162\u0008\u0012\u0004\u0012\u00020\u00020\u00012\u0008\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u0016B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\u0004\u0008\u0006\u0010\u0007J\u000e\u0010\n\u001a\u0008\u0012\u0004\u0012\u00020\u00020\tH\u0014J\u0008\u0010\u000b\u001a\u00020\u000cH\u0016J\u0010\u0010\r\u001a\u00020\u00022\u0006\u0010\u000e\u001a\u00020\u000fH\u0014J\u001a\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00022\u0008\u0010\u0013\u001a\u0004\u0018\u00010\u000cH\u0017J\u001a\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00022\u0008\u0010\u0015\u001a\u0004\u0018\u00010\u000cH\u0017R\u0014\u0010\u0008\u001a\u0008\u0012\u0004\u0012\u00020\u00020\tX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0017"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;",
        "Lcom/facebook/react/uimanager/ViewGroupManager;",
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;",
        "Lcom/facebook/react/viewmanagers/RNGoogleMobileAdsMediaViewManagerInterface;",
        "reactContext",
        "Lcom/facebook/react/bridge/ReactApplicationContext;",
        "<init>",
        "(Lcom/facebook/react/bridge/ReactApplicationContext;)V",
        "delegate",
        "Lcom/facebook/react/uimanager/ViewManagerDelegate;",
        "getDelegate",
        "getName",
        "",
        "createViewInstance",
        "context",
        "Lcom/facebook/react/uimanager/ThemedReactContext;",
        "setResponseId",
        "",
        "view",
        "responseId",
        "setResizeMode",
        "resizeMode",
        "Companion",
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


# static fields
.field public static final Companion:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager$Companion;

.field public static final NAME:Ljava/lang/String; = "RNGoogleMobileAdsMediaView"


# instance fields
.field private final delegate:Lcom/facebook/react/uimanager/ViewManagerDelegate;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/facebook/react/uimanager/ViewManagerDelegate<",
            "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 2

    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;->Companion:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager$Companion;

    return-void
.end method

.method public constructor <init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V
    .locals 1

    const-string v0, "reactContext"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 32
    invoke-direct {p0, p1}, Lcom/facebook/react/uimanager/ViewGroupManager;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    .line 34
    new-instance p1, Lcom/facebook/react/viewmanagers/RNGoogleMobileAdsMediaViewManagerDelegate;

    move-object v0, p0

    check-cast v0, Lcom/facebook/react/uimanager/BaseViewManager;

    invoke-direct {p1, v0}, Lcom/facebook/react/viewmanagers/RNGoogleMobileAdsMediaViewManagerDelegate;-><init>(Lcom/facebook/react/uimanager/BaseViewManager;)V

    check-cast p1, Lcom/facebook/react/uimanager/ViewManagerDelegate;

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;->delegate:Lcom/facebook/react/uimanager/ViewManagerDelegate;

    return-void
.end method


# virtual methods
.method public bridge synthetic createViewInstance(Lcom/facebook/react/uimanager/ThemedReactContext;)Landroid/view/View;
    .locals 0

    .line 29
    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;->createViewInstance(Lcom/facebook/react/uimanager/ThemedReactContext;)Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;

    move-result-object p1

    check-cast p1, Landroid/view/View;

    return-object p1
.end method

.method protected createViewInstance(Lcom/facebook/react/uimanager/ThemedReactContext;)Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;
    .locals 1

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 40
    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;

    check-cast p1, Lcom/facebook/react/bridge/ReactContext;

    invoke-direct {v0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;-><init>(Lcom/facebook/react/bridge/ReactContext;)V

    return-object v0
.end method

.method protected getDelegate()Lcom/facebook/react/uimanager/ViewManagerDelegate;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/facebook/react/uimanager/ViewManagerDelegate<",
            "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;",
            ">;"
        }
    .end annotation

    .line 36
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;->delegate:Lcom/facebook/react/uimanager/ViewManagerDelegate;

    return-object v0
.end method

.method public getName()Ljava/lang/String;
    .locals 1

    .line 38
    const-string v0, "RNGoogleMobileAdsMediaView"

    return-object v0
.end method

.method public bridge synthetic setResizeMode(Landroid/view/View;Ljava/lang/String;)V
    .locals 0

    .line 29
    check-cast p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;

    invoke-virtual {p0, p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;->setResizeMode(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;Ljava/lang/String;)V

    return-void
.end method

.method public setResizeMode(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;Ljava/lang/String;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/uimanager/annotations/ReactProp;
        name = "resizeMode"
    .end annotation

    const-string v0, "view"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 49
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->setResizeMode(Ljava/lang/String;)V

    return-void
.end method

.method public bridge synthetic setResponseId(Landroid/view/View;Ljava/lang/String;)V
    .locals 0

    .line 29
    check-cast p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;

    invoke-virtual {p0, p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaViewManager;->setResponseId(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;Ljava/lang/String;)V

    return-void
.end method

.method public setResponseId(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;Ljava/lang/String;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/uimanager/annotations/ReactProp;
        name = "responseId"
    .end annotation

    const-string v0, "view"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 44
    invoke-virtual {p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->setResponseId(Ljava/lang/String;)V

    return-void
.end method
