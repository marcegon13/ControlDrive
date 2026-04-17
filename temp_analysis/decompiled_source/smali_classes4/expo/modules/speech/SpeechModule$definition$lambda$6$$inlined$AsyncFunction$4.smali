.class public final Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;
.super Ljava/lang/Object;
.source "ObjectDefinitionBuilder.kt"

# interfaces
.implements Lkotlin/jvm/functions/Function1;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lexpo/modules/speech/SpeechModule;->definition()Lexpo/modules/kotlin/modules/ModuleDefinitionData;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lkotlin/jvm/functions/Function1<",
        "[",
        "Ljava/lang/Object;",
        "Ljava/lang/Object;",
        ">;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nObjectDefinitionBuilder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ObjectDefinitionBuilder.kt\nexpo/modules/kotlin/objects/ObjectDefinitionBuilder$AsyncFunction$6\n+ 2 EnforceType.kt\nexpo/modules/kotlin/types/EnforceTypeKt\n+ 3 SpeechModule.kt\nexpo/modules/speech/SpeechModule\n*L\n1#1,613:1\n11#2:614\n48#3,8:615\n*S KotlinDebug\n*F\n+ 1 ObjectDefinitionBuilder.kt\nexpo/modules/kotlin/objects/ObjectDefinitionBuilder$AsyncFunction$6\n*L\n249#1:614\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic this$0:Lexpo/modules/speech/SpeechModule;


# direct methods
.method public constructor <init>(Lexpo/modules/speech/SpeechModule;)V
    .locals 0

    iput-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic invoke(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 248
    check-cast p1, [Ljava/lang/Object;

    invoke-virtual {p0, p1}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;->invoke([Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public final invoke([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([",
            "Ljava/lang/Object;",
            ")",
            "Ljava/lang/Object;"
        }
    .end annotation

    const-string v0, "<destruct>"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v0, 0x0

    aget-object p1, p1, v0

    .line 250
    check-cast p1, Lexpo/modules/kotlin/Promise;

    .line 615
    iget-object v0, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v0}, Lexpo/modules/speech/SpeechModule;->access$isTextToSpeechReady(Lexpo/modules/speech/SpeechModule;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 616
    iget-object v0, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v0}, Lexpo/modules/speech/SpeechModule;->access$getVoices(Lexpo/modules/speech/SpeechModule;)Ljava/util/List;

    move-result-object v0

    check-cast v0, Ljava/util/Collection;

    invoke-interface {p1, v0}, Lexpo/modules/kotlin/Promise;->resolve(Ljava/util/Collection;)V

    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1

    .line 618
    :cond_0
    iget-object v0, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v0}, Lexpo/modules/speech/SpeechModule;->access$getDelayedGetVoices$p(Lexpo/modules/speech/SpeechModule;)Ljava/util/Queue;

    move-result-object v0

    invoke-interface {v0, p1}, Ljava/util/Queue;->add(Ljava/lang/Object;)Z

    .line 621
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {p1}, Lexpo/modules/speech/SpeechModule;->access$getTextToSpeech(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;

    move-result-object p1

    return-object p1
.end method
